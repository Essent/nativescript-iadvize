import { Color, ImageSource } from '@nativescript/core';
import { ChatConfiguration, IAdvizeCommon } from './iadvize.common';
import { ios as iosApp } from '@nativescript/core/application';
import { Observable } from 'rxjs';

export class IAdvize extends IAdvizeCommon {
    private static instance: IAdvize = new IAdvize();
    private delegate: ConversationControllerDelegate

    constructor() {
        super();
        if (IAdvize.instance) {
            throw new Error("iAdvize[iOS] Error: Instance failed: Use IAdvize.getInstance() instead of new.");
        }
        IAdvize.instance = this;
    }

    static getInstance() {
        return IAdvize.instance;
    }

    public activate(projectId: number, userId: string, onSuccess: () => void, onFailure: () => void) {
        IAdvizeSDK.shared.activateWithProjectIdAuthenticationOptionGdprOptionCompletion(projectId, new AuthenticationOption({ simple: userId}),  GDPROption.disabled(),  (success: boolean) => {
            if (success) {
                console.log('iAdvize[iOS] activated');
                IAdvize.activateChatbot();
                onSuccess();
            } else {
                console.error('iAdvize[iOS] activation failed');
                onFailure();
            }
        });
    }

    public activateTargetingRule(targetingRuleUUID: string) {
        IAdvizeSDK.shared.targetingController.activateTargetingRuleWithTargetingRuleId(new NSUUID({ UUIDString: targetingRuleUUID }));
    }

    public logout() {
        IAdvizeSDK.shared.logout();
        IAdvize.deactivateChatbot();
    }

    public customize(configuration: ChatConfiguration) {
        const mainColor = new Color(configuration.mainColor).ios
        const navigationBarBackgroundColor = new Color(configuration.navigationBarBackgroundColor).ios;
        const navigationBarMainColor = new Color(configuration.navigationBarMainColor).ios
        const avatar = ImageSource.fromFileOrResourceSync('res://'+configuration.incomingMessageAvatar).ios;

        const chatboxConfiguration = new ChatboxConfiguration()

        chatboxConfiguration.mainColor = mainColor
        chatboxConfiguration.navigationBarBackgroundColor = navigationBarBackgroundColor
        chatboxConfiguration.navigationBarMainColor = navigationBarMainColor
        chatboxConfiguration.automaticMessage = configuration.automaticMessage
        chatboxConfiguration.incomingMessageAvatar = new IncomingMessageAvatar({ image: avatar })
        chatboxConfiguration.navigationBarTitle = configuration.navigationBarTitle
        chatboxConfiguration.font = UIFont.fontWithNameSize(configuration.font, 12);

        chatboxConfiguration.presentationStyle = UIModalPresentationStyle.FullScreen

        IAdvizeSDK.shared.chatboxController.setupChatboxWithConfiguration(chatboxConfiguration)
    }

    public registerConversationListener(openURLCallback: (url: string) => boolean, ongoingConversationStatusDidChange: (hasOngoingConversation: boolean) => void, newMessageReceived: (content: string) => void) {
        this.delegate = ConversationControllerDelegateImpl.initWithCallbacks(openURLCallback, ongoingConversationStatusDidChange, newMessageReceived);
        IAdvizeSDK.shared.conversationController.delegate = this.delegate;
    }

    public hideDefaultChatButton() {
        IAdvizeSDK.shared.chatboxController.useDefaultChatButton = false;
    }

    public presentChat() {
        IAdvizeSDK.shared.conversationController.presentChatboxWithAnimatedPresentingViewControllerCompletion(true, iosApp.window.rootController, () => {});
    }

    public dismissChat() {
        IAdvizeSDK.shared.conversationController.dismissChatboxWithAnimatedCompletion(false, () => {});
    }

    public registerPushToken(token: string, isProd: boolean) {
        IAdvizeSDK.shared.notificationController.registerPushTokenApplicationMode(token, isProd ? GraphQLApplicationMode.Prod : GraphQLApplicationMode.Dev)
    }

    public isChatPresented() {
        return IAdvizeSDK.shared.conversationController.isChatboxPresented()
    }

    public chatbotActivatedState(): Observable<boolean> {
        return IAdvize.getChatbotActivated().asObservable();
      }
}

@NativeClass()
class ConversationControllerDelegateImpl extends NSObject implements ConversationControllerDelegate {
    static ObjCProtocols = [ConversationControllerDelegate]
    private openURLCallback: (url: string) => boolean;
    private ongoingConversationStatusDidChange: (hasOngoingConversation: boolean) => void;
    private newMessageReceived: (content: string) => void;

    static initWithCallbacks(openURLCallback: (url: string) => boolean, ongoingConversationStatusDidChange: (hasOngoingConversation: boolean) => void, newMessageReceived: (content: string) => void): ConversationControllerDelegateImpl {
        let delegate = <ConversationControllerDelegateImpl>super.new()
        delegate.openURLCallback = openURLCallback;
        delegate.ongoingConversationStatusDidChange = ongoingConversationStatusDidChange;
        delegate.newMessageReceived = newMessageReceived;
        return delegate;
    }

    conversationControllerShouldOpen?(_controller: ConversationController, url: NSURL): boolean {
        return this.openURLCallback(url.absoluteString);
    }

	didReceiveNewMessageWithContent?(_content: string): void {
        this.newMessageReceived(_content);
    }

	ongoingConversationStatusDidChangeWithHasOngoingConversation(hasOngoingConversation: boolean): void {
        this.ongoingConversationStatusDidChange(hasOngoingConversation);
    }

}
