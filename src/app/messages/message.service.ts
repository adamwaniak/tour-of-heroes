import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[];

  constructor(){
    this.messages = [];
  }

  add(message: string){
    this.messages.push(message)
  }

  clear(){
    this.messages = [];
  }

}
