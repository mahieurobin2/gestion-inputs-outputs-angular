import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input()
  ContentFromInput : string;
  @Output()
  EventToSendToApp = new EventEmitter<string>();
  constructor() { }
  sendEventToApp(contentToSendToApp:string){
    this.EventToSendToApp.emit(contentToSendToApp)
  }
  ngOnInit(): void {
  }

}
