import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProjects from './projects/projects.reducer';

export interface AppState {
  projects: fromProjects.ProjectState
}

export const reducers: ActionReducerMap<AppState> = {
  projects: fromProjects.projectsReducer
}
