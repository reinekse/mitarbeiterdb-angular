import {Routes} from '@angular/router';
import {PersonListComponent} from "./view/person-view/person-list/person-list.component";
import {PersonAddComponent} from "./view/person-view/person-add/person-add.component";
import {PersonEditComponent} from "./view/person-view/person-edit/person-edit.component";
import {StandortAddComponent} from "./view/standort-view/standort-add/standort-add.component";
import {StandortEditComponent} from "./view/standort-view/standort-edit/standort-edit.component";
import {StandortListComponent} from "./view/standort-view/standort-list/standort-list.component";

export const routes: Routes = [
  // Standort
  {path: 'standort', redirectTo: 'standort/list', pathMatch: 'full'},
  {path: 'standort/list', component: StandortListComponent},
  {path: 'standort/add', component: StandortAddComponent},
  {path: 'standort/edit', component: StandortEditComponent},
  // Person
  {path: 'person', redirectTo: 'person/list', pathMatch: 'full'},
  {path: 'person/list', component: PersonListComponent},
  {path: 'person/add', component: PersonAddComponent},
  {path: 'person/edit', component: PersonEditComponent},


];

