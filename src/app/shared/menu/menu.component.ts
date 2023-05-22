import { Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DeveloperComponent } from '../../developer/developer.component';
import { DeveloperPreviewComponent } from '../developer-preview/developer-preview.component';
import { Developer } from '../../developer/developer';
import { DeveloperService } from '../../developer/developer.service';
import { EventBusService } from '../event-bus.service';
import { EventData } from '../event.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() rol!: string;
  admin: boolean = false;
  @Input() developer!: Developer;

  constructor(
    private eventBusService: EventBusService,
    private developerService: DeveloperService
  ) {}

  ngOnInit() {
    if (this.rol == 'admin') {
      this.admin = true;
    }
  }

  // onShowDetails() {
  //   this.developerService.showPreview(this.developer);
  // }
  onShowDetails() {
    this.eventBusService.emit(new EventData('preview', this.developer));
  }

  onDelete() {
    this.eventBusService.emit(new EventData('delete', this.developer));
  }
}
