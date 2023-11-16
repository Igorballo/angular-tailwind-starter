import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  @Input({ required: true}) events: any;
  @Output() eventId: string | null = null;
  @Output() showDetails = new EventEmitter<number>();

  onDetails(eventId: number){
    this.showDetails.emit(eventId)
    console.log("recupere de le card", eventId)
  }
}
