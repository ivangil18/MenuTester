import { Component, Inject } from '@angular/core';
import { Developer } from '../developer/developer';
import { DeveloperService } from '../developer/developer.service';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-developer-preview',
  templateUrl: './developer-preview.component.html',
  styleUrls: ['./developer-preview.component.css'],
})
export class DeveloperPreviewComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: { developer: Developer; rol: string }
  ) {}
}
