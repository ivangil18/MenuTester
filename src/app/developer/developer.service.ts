import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  developerSubject = new Subject<Developer>();

  constructor(private httpService: HttpClient) {}

  getDevelopers(): Observable<Developer[]> {
    return this.httpService.get<Developer[]>('http://localhost:3000/developer');
  }

  developerSelected(dev: Developer) {
    this.developerSubject.next(dev);
  }
}
