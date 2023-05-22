import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { EventData } from 'src/app/shared/event.class';

@Component({
  selector: 'app-developer-item',
  templateUrl: './developer-item.component.html',
  styleUrls: ['./developer-item.component.css'],
})
export class DeveloperItemComponent {
  @Input() developer!: Developer;
  // @Output() devDetailEvt = new EventEmitter();

  constructor(
    private devloperService: DeveloperService,
    private eventBusService: EventBusService
  ) {}
  onDeveloperSelected() {
    // this.devDetailEvt.emit(this.developer);
    // this.devloperService.showPreview(this.developer);
    this.eventBusService.emit(new EventData('preview', this.developer));
  }
}
