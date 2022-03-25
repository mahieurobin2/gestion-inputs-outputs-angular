import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-angular';
  contentToSendToChild : string = "prenom";
  contentReceivedFromChild:string
  processReceivedEvent(receivedEvent:string){
    this.contentReceivedFromChild = receivedEvent;
  }
}

