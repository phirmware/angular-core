import { Injectable } from '@angular/core';
import { ProjectModel } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<ProjectModel[]>(BASE_URL);
  }

  create(project) {
    return this.http.post<ProjectModel>(BASE_URL, project);
  }

  update(id, project) {
    return this.http.put<ProjectModel>(`${BASE_URL}/${id}`, project);
  }

  delete(id) {
    return this.http.delete<ProjectModel>(`${BASE_URL}/${id}`);
  }
}
