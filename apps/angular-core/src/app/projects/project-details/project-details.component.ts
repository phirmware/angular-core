import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectModel } from '@app/core-data';

@Component({
  selector: 'angular-core-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();
  project: ProjectModel;
  projectTitle: string;
  @Input() set selectedProject(value: any) {
    if(value) this.projectTitle = value.title;
    this.project = Object.assign({}, value);
  }

  constructor() { }

  ngOnInit() {
  }

}
