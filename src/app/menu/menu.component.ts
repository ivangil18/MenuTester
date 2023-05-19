import { Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DeveloperComponent } from '../developer/developer.component';
import { DeveloperPreviewComponent } from '../developer-preview/developer-preview.component';
import { Developer } from '../developer/developer';
import { DeveloperService } from '../developer/developer.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  admin: boolean = false;
  @Input() developer!: Developer;

  constructor(private developerService: DeveloperService) {}

  onDetails() {
    this.developerService.onShowPreview(this.developer);
  }
}