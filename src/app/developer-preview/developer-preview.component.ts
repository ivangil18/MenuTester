import { Component } from '@angular/core';
import { Developer } from '../developer/developer';
import { DeveloperService } from '../developer/developer.service';

@Component({
  selector: 'app-developer-preview',
  templateUrl: './developer-preview.component.html',
  styleUrls: ['./developer-preview.component.css'],
})
export class DeveloperPreviewComponent {
  developer?: Developer;

  constructor(private developerService: DeveloperService) {}

  ngOnInit() {
    this.developerService.developerSubject.subscribe((data) => {
      this.developer = data;
      console.log(this.developer);
    });
  }
}
