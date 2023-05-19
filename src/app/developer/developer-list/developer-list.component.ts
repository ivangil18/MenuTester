import { Component } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DeveloperPreviewComponent } from 'src/app/developer-preview/developer-preview.component';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css'],
})
export class DeveloperListComponent {
  developers: Developer[] = [];

  constructor(
    private developerService: DeveloperService,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    this.developerService.getDevelopers().subscribe((response) => {
      this.developers = response;
    });
  }

  onShowPreview(dev: Developer) {
    this._bottomSheet.open(DeveloperPreviewComponent, {
      data: { developer: dev },
    });
  }
}
