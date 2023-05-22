import { Component } from '@angular/core';
import { Developer } from '../developer';
import { ActivatedRoute } from '@angular/router';
import { DeveloperService } from '../developer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-developer-edit',
  templateUrl: './developer-edit.component.html',
  styleUrls: ['./developer-edit.component.css'],
})
export class DeveloperEditComponent {
  developer!: Developer;
  name!: string;
  position!: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private developerService: DeveloperService
  ) {}

  ngOnInit() {
    this.getDeveloper();
  }

  getDeveloper() {
    const developerId = Number(this.route.snapshot.params['id']);
    this.developerService.getDeveloper(developerId).subscribe((data) => {
      this.developer = data;
      this.name = data.name;
      this.position = data.position;
    });
  }

  onSave() {
    this.developer.name = this.name;
    this.developer.position = this.position;
    console.log(this.developer);
    this.developerService
      .updateDeveloper(this.developer)
      .subscribe(() => this.location.back());
  }

  onCancel() {
    this.location.back();
  }
}
