import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Project, Projects } from '@modules/projects/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  apiUrl: string = 'http://localhost:5000/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
