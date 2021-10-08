# nativescript-iadvize
A NativeScript plugin for integration of iAdvize chat into Android/iOS app.

# NativeScript plugin for iAdvize SDK

[![npm version](https://badge.fury.io/js/nativescript-iadvize.svg)](https://www.npmjs.com/package/nativescript-iadvize)

This is a plugin to show the conversation from a iAdvize chat, using the iAdvize SDK ([Android](https://github.com/iadvize/iadvize-android-sdk) v2.2.2, [iOS](https://github.com/iadvize/iadvize-ios-sdk) v2.2.5).

## Requirements
* iOS 12.0 or higher, and Xcode 12.5
* Minimum Android Version API 19, and Kotlin 1.5.10
* NativeScript CLI 7.x
* [iAdvize account](https://www.iadvize.com/)

## Installation
Run the following command from the root of your project:

```console
npm install nativescript-iadvize
```

### Activation
When the user logs in to the your app call `activate` with your credentials (our example [home.component.ts](./demo/src/app/home/home.component.ts)):
```ts
IAdvize.activate(XXXX, 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'userId', () => {
  console.log('IAdvize conversation activated.');
});
```

### Chatting
To open the chat window call `presentChat()`:
```ts
IAdvize.presentChat();
```

### Optional functions

#### Hide default chat button
To hide default chat button call `hideDefaultChatButton()`:
```ts
IAdvize.hideDefaultChatButton();
```

#### UI customization
To customize the chatbox UI call `customize()`:
```ts
const configuration: ChatConfiguration = {
  automaticMessage: 'Any question? Say Hello to Smart and we will answer you as soon as possible! 😊',
  font: 'fontPath',
  incomingMessageAvatar: 'avatar-icon',
  mainColor: '#4103fc',
  navigationBarBackgroundColor: '#4103fc',
  navigationBarMainColor: '#ffffff',
  navigationBarTitle: 'Chat Title'
};
IAdvize.customize(configuration);
```

#### Logging Out
To preserve the confidentiality of user conversation call `logout()`.

```ts
IAdvize.logout();
```

#### Conversation events
To add a listener to be informed in real time about conversation events call `registerConversationListener()`.

```ts
IAdvize.registerConversationListener((url: string) => {
  console.log('Handle clicked url - ' + url);
  return false;
}, (hasOngoingConversation: boolean) => {
    console.log('Ongoing conversation status changed - ' + hasOngoingConversation);
});
```


#### Push Notifications
To be informed of chat messages received when your app is not running call `registerPushToken()`
```ts
IAdvize.registerPushToken('your-token', isProduction);
```

### Development setup

For easier development and debugging purposes continue with the following steps:

Open a command prompt/terminal, navigate to src folder and run `npm run demo.ios` or `npm run demo.android` to run the demo.

Now go and make a change to your plugin. It will be automatically applied to the demo project.

#### Clean plugin and demo files

Sometimes you may need to wipe away all generated folders to reinstall them fresh.
Run `npm run clean` to wipe those clean then you can can run `plugin.prepare` to install fresh dependencies.

Sometimes you just need to wipe out the demo's platforms, node_modules and hooks directory only.
Run ```npm run demo.reset``` to delete those.
