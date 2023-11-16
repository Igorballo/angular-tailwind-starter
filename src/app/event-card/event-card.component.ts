import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  @Input({ required: true}) event: any = null;
  @Output() details = new EventEmitter<number>();

  showEvent(){
    this.details.emit(this.event.id)
  }
}
