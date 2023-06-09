import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { Observable, Subject } from 'rxjs';
import { DeveloperPreviewComponent } from '../shared/developer-preview/developer-preview.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  // developerSubject = new Subject<Developer>();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private httpService: HttpClient,
    private _bottomSheet: MatBottomSheet
  ) {}

  getDevelopers(): Observable<Developer[]> {
    return this.httpService.get<Developer[]>('http://localhost:3000/developer');
  }

  getDeveloper(id: Number) {
    return this.httpService.get<Developer>(
      `http://localhost:3000/developer/${id}`
    );
  }

  // developerSelected(dev: Developer) {
  //   this.developerSubject.next(dev);
  //   console.log(this.developerSubject);
  // }

  showPreview(dev: Developer) {
    this._bottomSheet.open(DeveloperPreviewComponent, {
      data: { developer: dev, rol: dev.rol },
    });
  }

  deleteDeveloper(dev: Developer) {
    const url = `http://localhost:3000/developer/${dev.id}`;
    return this.httpService.delete(url);
  }

  updateDeveloper(dev: Developer) {
    const url = `http://localhost:3000/developer/${dev.id}`;
    return this.httpService.put<Developer>(url, dev, this.httpOptions);
  }
}
