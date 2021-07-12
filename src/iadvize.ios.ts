import { Color, ImageSource, iOSApplication } from '@nativescript/core';
import { ChatConfiguration, Common } from './iadvize.common';
import { ios as iosApp } from '@nativescript/core/application';


export class IAdvize extends Common {
    public static activate(projectId: number, targetingRuleUUID: string, userId: string, onSuccess: () => void) {
        IAdvizeSDK.shared.activateWithProjectIdAuthenticationOptionGdprOptionCompletion(projectId, new AuthenticationOption({ simple: userId}),  GDPROption.disabled(),  (success: boolean) => {
            if (success) {
                console.log('iAdvize[iOS] activated');
                IAdvizeSDK.shared.targetingController.activateTargetingRuleWithTargetingRuleId(new NSUUID({ UUIDString: targetingRuleUUID }));
                onSuccess();
            } else {
                console.error('iAdvize[iOS] activation failed');
            }
        });
    }

    public static logout() {
        IAdvizeSDK.shared.logout();
    }

    public static customize(configuration: ChatConfiguration) {
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

    public static registerConversationListener(openURLCallback: (url: string) => boolean, ongoingConversationStatusDidChange: (hasOngoingConversation: boolean) => void) {
        IAdvizeSDK.shared.conversationController.delegate = ConversationControllerDelegateImpl.initWithCallbacks(openURLCallback, ongoingConversationStatusDidChange);
    }

    public static hideDefaultChatButton() {
        IAdvizeSDK.shared.chatboxController.useDefaultChatButton = false;
    }

    public static presentChat() {
        IAdvizeSDK.shared.conversationController.presentConversationViewModalWithAnimatedPresentingViewControllerCompletion(true, iosApp.window.rootController, () => {});
    }

    public static registerPushToken(token: string, isProd: boolean) {
        IAdvizeSDK.shared.notificationController.registerPushTokenApplicationMode(token, isProd ? GraphQLApplicationMode.Prod : GraphQLApplicationMode.Dev)
    }
}

@NativeClass()
class ConversationControllerDelegateImpl extends NSObject implements ConversationControllerDelegate {
    static ObjCProtocols = [ConversationControllerDelegate]
    private openURLCallback: (url: string) => boolean;
    private ongoingConversationStatusDidChange: (hasOngoingConversation: boolean) => void;

    static initWithCallbacks(openURLCallback: (url: string) => boolean, ongoingConversationStatusDidChange: (hasOngoingConversation: boolean) => void): ConversationControllerDelegateImpl {
        let delegate = <ConversationControllerDelegateImpl>super.new() 
        delegate.openURLCallback = openURLCallback;
        delegate.ongoingConversationStatusDidChange = ongoingConversationStatusDidChange;
        return delegate;
    }

    conversationControllerShouldOpen?(_controller: ConversationController, url: NSURL): boolean {
        return this.openURLCallback(url.absoluteString);
    }

	didReceiveNewMessageWithContent?(_content: string): void {
    }

	ongoingConversationStatusDidChangeWithHasOngoingConversation(hasOngoingConversation: boolean): void {
        this.ongoingConversationStatusDidChange(hasOngoingConversation);
    }

}