import {Routes} from '@angular/router';
import {PersonIndexComponent} from "./view/person-view/person-index/person-index.component";
import {PersonAddFormComponent} from "./view/person-view/person-add/person-add-form.component";
import {PersonEditFormComponent} from "./view/person-view/person-edit/person-edit-form.component";
import {StandortAddFormComponent} from "./view/standort-view/standort-add/standort-add-form.component";
import {StandortEditFormComponent} from "./view/standort-view/standort-edit/standort-edit-form.component";
import {StandortIndexComponent} from "./view/standort-view/standort-index/standort-index.component";

export const routes: Routes = [
  // Standort
  {path: 'standort', redirectTo: 'standort/index', pathMatch: 'full'},
  {path: 'standort/index', component: StandortIndexComponent},
  {path: 'standort/add-form', component: StandortAddFormComponent},
  {path: 'standort/:standortId/edit-form', component: StandortEditFormComponent},
  // Person
  {path: 'person', redirectTo: 'person/index', pathMatch: 'full'},
  {path: 'person/index', component: PersonIndexComponent},
  {path: 'person/add-form', component: PersonAddFormComponent},
  {path: 'person/:personId/edit-form', component: PersonEditFormComponent},


];

