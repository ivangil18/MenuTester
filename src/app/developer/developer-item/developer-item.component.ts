import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Developer } from '../developer';

@Component({
  selector: 'app-developer-item',
  templateUrl: './developer-item.component.html',
  styleUrls: ['./developer-item.component.css'],
})
export class DeveloperItemComponent {
  @Input() developer!: Developer;
  @Output() devDetailEvt = new EventEmitter();

  onDeveloperSelected() {
    this.devDetailEvt.emit(this.developer);
  }
}
