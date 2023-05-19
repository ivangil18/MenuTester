import { Component } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css'],
})
export class DeveloperListComponent {
  developers: Developer[] = [];

  constructor(private developerService: DeveloperService) {}

  ngOnInit() {
    this.developerService.getDevelopers().subscribe((response) => {
      this.developers = response;
    });
  }
}
