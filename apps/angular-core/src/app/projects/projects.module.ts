import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';

import { ProjectsRoutingModule } from './projects-routing.module';
import { MaterialModule } from '@app/material';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


@NgModule({
  declarations: [ProjectsComponent, ProjectsListComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ProjectsRoutingModule
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
