import { Component, OnInit, Output } from '@angular/core';
import { ProjectsService } from '@app/core-data';
import { ProjectModel } from '@app/core-data';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';

@Component({
  selector: 'angular-core-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects$: Observable<ProjectModel[]>;
  selectedProject: ProjectModel;

  constructor(private projectservice: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
    this.reset();
  }

  getProjects() {
    this.projects$ = this.projectservice.all();
  }

  updateProject(project) {
    this.projectservice.update(project.id, project).subscribe(res => {this.getProjects(); this.reset()});
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  saveProject(project) {
    if(!project.id) return this.createProject(project);
    this.updateProject(project);
  }

  createProject(project) {
    this.projectservice.create(project).subscribe(res => {this.getProjects(); this.reset()});
  }

  deleteProject(project) {
    this.projectservice.delete(project.id).subscribe(response => this.getProjects());
  }

  cancel() {
    this.reset();
  }

  reset() {
    const emptyProject: ProjectModel = {
      id: '',
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };
    this.selectProject(emptyProject);
  }

}
