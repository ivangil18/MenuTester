import { Component, Input } from '@angular/core';
import { Developer } from '../developer';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DeveloperPreviewComponent } from 'src/app/developer-preview/developer-preview.component';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-developer-item',
  templateUrl: './developer-item.component.html',
  styleUrls: ['./developer-item.component.css'],
})
export class DeveloperItemComponent {
  @Input() developer!: Developer;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private developerService: DeveloperService
  ) {}

  openBottomSheet(): void {
    this._bottomSheet.open(DeveloperPreviewComponent);
    this.developerService.developerSelected(this.developer);
  }
}
