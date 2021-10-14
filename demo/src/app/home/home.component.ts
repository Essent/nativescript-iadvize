import { Component, OnInit } from "@angular/core";
import { IAdvize, ChatConfiguration } from '@essent/nativescript-iadvize';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    ngOnInit(): void {
        const instance = IAdvize.getInstance();
        instance.activate(1111, 'userId', () => {
            instance.activateTargetingRule('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX');

            const configuration: ChatConfiguration = {
                automaticMessage: 'Any question? Say Hello to Smart and we will answer you as soon as possible! 😊',
                font: '',
                incomingMessageAvatar: 'lighthouse',
                mainColor: '#4103fc',
                navigationBarBackgroundColor: '#4103fc',
                navigationBarMainColor: '#ffffff',
                navigationBarTitle: 'Test Title'
            };
            instance.hideDefaultChatButton();
            instance.customize(configuration);
            instance.registerConversationListener((url: string) => {
                console.log('Handle clicked url - ' + url);
                instance.dismissChat();
                return false;
              }, (hasOngoingConversation: boolean) => {
                  console.log('Ongoing conversation status changed - ' + hasOngoingConversation);
              }, (content: string) => {
                  console.log('New message received: ' + content);
              });


              instance.presentChat();
        }, () => {
            console.warn('Activation failed!');
        });
    }
}
