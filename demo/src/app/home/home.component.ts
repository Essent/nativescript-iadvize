import { Component, OnInit } from "@angular/core";
import { IAdvize, ChatConfiguration } from 'nativescript-iadvize';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    ngOnInit(): void {
        IAdvize.activate(1111, 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'userId', () => {
            setTimeout(() => {
                IAdvize.presentChat();
            }, 1000);
        });

        const configuration: ChatConfiguration = {
            automaticMessage: 'Any question? Say Hello to Smart and we will answer you as soon as possible! 😊',
            font: '',
            incomingMessageAvatar: 'lighthouse',
            mainColor: '#4103fc',
            navigationBarBackgroundColor: '#4103fc',
            navigationBarMainColor: '#ffffff',
            navigationBarTitle: 'Test Title'
        };
        IAdvize.hideDefaultChatButton();
        IAdvize.customize(configuration);
        IAdvize.registerConversationListener((url: string) => {
            console.log('Handle clicked url - ' + url);
            return false;
          }, (hasOngoingConversation: boolean) => {
              console.log('Ongoing conversation status changed - ' + hasOngoingConversation);
          });
    }
}
