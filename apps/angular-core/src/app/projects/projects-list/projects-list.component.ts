import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectModel } from '@app/core-data';

@Component({
  selector: 'angular-core-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  @Input() projects: ProjectModel[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
