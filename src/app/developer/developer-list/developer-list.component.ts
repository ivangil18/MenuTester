import { Component } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DeveloperPreviewComponent } from 'src/app/shared/developer-preview/developer-preview.component';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { EventData } from 'src/app/shared/event.class';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css'],
})
export class DeveloperListComponent {
  developers: Developer[] = [];

  constructor(
    private developerService: DeveloperService,
    private _bottomSheet: MatBottomSheet,
    private eventBusService: EventBusService
  ) {}

  ngOnInit() {
    this.developerService.getDevelopers().subscribe((response) => {
      this.developers = response;
    });
    this.eventBusService.on('preview', (data: EventData) => {
      console.log('Preview:' + data);
      this.onShowPreview(data.value);
    });
    this.eventBusService.on('delete', (data: EventData) => {
      console.log('Deleleting' + data);
      this.delete(data.value);
    });
  }

  private delete(dev: Developer): void {
    this.developers = this.developers.filter((d) => d !== dev);
    this.developerService.deleteDeveloper(dev).subscribe();
  }

  private onShowPreview(dev: Developer) {
    this._bottomSheet.open(DeveloperPreviewComponent, {
      data: { developer: dev },
    });
  }
}
