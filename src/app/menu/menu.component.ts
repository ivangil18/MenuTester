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
  developer!: Developer;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private developerService: DeveloperService
  ) {}

  ngOnInit() {
    this.developerService.developerSubject.subscribe((data) => {
      this.developer = data;

      // if (!this.developer) {

      // }
    });
  }

  openBottomSheet(): void {
    this._bottomSheet.open(DeveloperPreviewComponent);
    this.developerService.developerSelected(this.developer);
    console.log(this.developer);
  }
}
