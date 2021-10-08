import { ChatConfiguration, IAdvizeCommon } from './iadvize.common';
import { android as androidApp } from '@nativescript/core/application';
import { Color, ImageSource } from '@nativescript/core';
import { Observable } from 'rxjs';

import AuthenticationOption = com.iadvize.conversation.sdk.model.auth.AuthenticationOption;
import GDPROption = com.iadvize.conversation.sdk.model.gdpr.GDPROption;
import IAdvizeCallback = com.iadvize.conversation.sdk.model.IAdvizeSDKCallback;
import ChatboxConfiguration = com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration
import IncomingMessageAvatar = com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar
import ConversationListener = com.iadvize.conversation.sdk.controller.conversation.ConversationListener
import ChatboxActivity = com.iadvize.conversation.sdk.view.conversation.ChatboxActivity

import Throwable = java.lang.Throwable
import BitmapDrawable = android.graphics.drawable.BitmapDrawable
import Integer = java.lang.Integer
import UUID = java.util.UUID
import Class = java.lang.Class
import List = java.util.List

export class IAdvize extends IAdvizeCommon {
  private static instance: IAdvize = new IAdvize();
  private IAdvizeSDK: Class<any>;
  
  constructor() {
      super();
      if (IAdvize.instance) {
          throw new Error("iAdvize[Android] Error: Instance failed: Use IAdvize.getInstance() instead of new.");
      }
      IAdvize.instance = this;
      IAdvize.instance.IAdvizeSDK = Class.forName('com.iadvize.conversation.sdk.IAdvizeSDK');
  }

    static getInstance() {
        return IAdvize.instance;
    }

    public activate(projectId: number, userId: string, onSuccess: () => void, onFailure: () => void) {
        console.log('activate called');

        this.initate();

        var typeArr = java.lang.reflect.Array.newInstance(java.lang.Class.class, 4);
        typeArr[0] = java.lang.Integer.TYPE;
        typeArr[1] = AuthenticationOption.class;
        typeArr[2] = GDPROption.class;
        typeArr[3] = IAdvizeCallback.class;

        var paramsArr = java.lang.reflect.Array.newInstance(java.lang.Object.class, 4);
        paramsArr[0] = new java.lang.Integer(projectId);
        paramsArr[1] = new AuthenticationOption.Simple(userId);
        paramsArr[2] = new GDPROption.Disabled();
        paramsArr[3] = new IAdvizeCallback(
            {
                onSuccess(): void {
                    console.log('iAdvize[Android] activated');
                    IAdvize.activateChatbot();
                    onSuccess();
                },
                onFailure(error: Throwable): void {
                console.error('iAdvize[Android] activation failed' + error.getLocalizedMessage());
                onFailure();
                }
            }
        );

        this.IAdvizeSDK.getMethod('activate', typeArr).invoke(this.IAdvizeSDK, paramsArr);
    }

    public activateTargetingRule(targetingRuleUUID: string) {
      try {
          const targetingController = this.IAdvizeSDK.getDeclaredField('targetingControllerImpl');
          targetingController.setAccessible(true);
          const ctrl = targetingController.get(this.IAdvizeSDK);
          ctrl.activateTargetingRule(UUID.fromString(targetingRuleUUID));
        } catch (e) {
          console.error('iAdvize[Android] error ' + e);
        }
    }

    public logout() {
      this.IAdvizeSDK.getMethod('logout', null).invoke(this.IAdvizeSDK, null);
      IAdvize.deactivateChatbot();
    }

    public customize(configuration: ChatConfiguration) {
      const mainColor = new Color(configuration.mainColor).android;
      const navigationBarBackgroundColor = new Color(configuration.navigationBarBackgroundColor).android;
      const navigationBarMainColor = new Color(configuration.navigationBarMainColor).android;
      const avatar = ImageSource.fromFileOrResourceSync('res://'+configuration.incomingMessageAvatar).android

      const chatboxConfiguration = new ChatboxConfiguration(mainColor);
      chatboxConfiguration.setToolbarBackgroundColor(Integer.valueOf(navigationBarBackgroundColor));
      chatboxConfiguration.setToolbarMainColor(Integer.valueOf(navigationBarMainColor));
      chatboxConfiguration.setIncomingMessageAvatar(new IncomingMessageAvatar.Image(new BitmapDrawable(androidApp.context.getResources(), avatar)));
      chatboxConfiguration.setAutomaticMessage(configuration.automaticMessage);
      chatboxConfiguration.setToolbarTitle(configuration.navigationBarTitle);
      chatboxConfiguration.setFontPath(configuration.font);

      try {
        const chatboxController = this.IAdvizeSDK.getDeclaredField('chatboxControllerImpl');
        chatboxController.setAccessible(true);
        const ctrl = chatboxController.get(this.IAdvizeSDK);
        ctrl.setupChatbox(chatboxConfiguration);
      } catch (e) {
        console.error('iAdvize[Android] error ' + e);
      }
    }

    public registerConversationListener(openURLCallback: (url: string) => boolean, ongoingConversationStatusDidChange: (hasOngoingConversation: boolean) => void, newMessageReceived: (content: string) => void) {
      try {
        const conversationController = this.IAdvizeSDK.getDeclaredField('conversationControllerImpl');
        conversationController.setAccessible(true);
        const conversationCtrl = conversationController.get(this.IAdvizeSDK);
        const listeners: List<ConversationListener> = conversationCtrl.getListeners();
        listeners.add(new ConversationListener({
          onOngoingConversationStatusChanged(param0: boolean): void {
            ongoingConversationStatusDidChange(param0);
          },
          onNewMessageReceived(_param0: string): void {
            newMessageReceived(_param0);
          },
          handleClickedUrl(param0: globalAndroid.net.Uri): boolean {
            return !openURLCallback(param0.toString());
          }
        }));
      } catch (e) {
        console.error('iAdvize[Android] error ' + e);
      }
    }

    public hideDefaultChatButton() {
      try {
        const chatboxController = this.IAdvizeSDK.getDeclaredField('chatboxControllerImpl');
        chatboxController.setAccessible(true);
        const ctrl = chatboxController.get(this.IAdvizeSDK);
        ctrl.setUseDefaultChatButton(false);
      } catch (e) {
        console.error('iAdvize[Android] error ' + e);
      }
    }

    public presentChat() {
      try {
        const chatboxController = this.IAdvizeSDK.getDeclaredField('chatboxControllerImpl');
        chatboxController.setAccessible(true);
        const ctrl = chatboxController.get(this.IAdvizeSDK);
        ctrl.presentChatboxActivity(androidApp.foregroundActivity);
      } catch (e) {
        console.error('iAdvize[Android] error ' + e);
      }
    }

    public dismissChat() {
      const isChatActivity = androidApp.foregroundActivity instanceof ChatboxActivity;
      if (isChatActivity) {
        androidApp.foregroundActivity.finish();
      }
    }

    public registerPushToken(token: string, _isProd: boolean) {
      try {
        const notificationController = this.IAdvizeSDK.getDeclaredField('notificationControllerImpl');
        notificationController.setAccessible(true);
        const ctrl = notificationController.get(this.IAdvizeSDK);
        ctrl.registerPushToken(token);
      } catch (e) {
        console.error('iAdvize[Android] error ' + e);
      }
    }

    public isChatPresented() {
      try {
        const chatboxController = this.IAdvizeSDK.getDeclaredField('chatboxControllerImpl');
        chatboxController.setAccessible(true);
        const chatboxCtrl = chatboxController.get(this.IAdvizeSDK);
        return chatboxCtrl.isChatboxPresented()
      } catch (e) {
        console.error('iAdvize[Android] error ' + e);
      }
    }

    public chatbotActivatedState(): Observable<boolean> {
      return IAdvize.getChatbotActivated().asObservable();
    }

    private initate() {
        var typeArr = java.lang.reflect.Array.newInstance(java.lang.Class.class, 1);
        typeArr[0] = android.app.Application.class;
  
        var paramsArr = java.lang.reflect.Array.newInstance(java.lang.Object.class, 1);
        paramsArr[0] = androidApp.nativeApp;
  
        this.IAdvizeSDK.getMethod('initiate', typeArr).invoke(this.IAdvizeSDK, paramsArr);
      //   IAdvizeSDK.initiate(androidApp.nativeApp);

    }
}
