import {  Observable } from '@nativescript/core';

export class Common extends Observable {

}

export interface ChatConfiguration {
    automaticMessage: string;
    font: string;
    incomingMessageAvatar: string;
    mainColor: string;
    navigationBarBackgroundColor: string;
    navigationBarMainColor: string;
    navigationBarTitle: string;
}
