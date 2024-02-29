import {Routes} from '@angular/router';
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonFormComponent} from "./person-form/person-form.component";
import {StandortListComponent} from "./standort-list/standort-list.component";
import {StandortFormComponent} from "./standort-form/standort-form.component";

export const routes: Routes = [
  {path: 'person/all', component: PersonListComponent},
  {path: 'person/add', component: PersonFormComponent},
  {path: 'standort/all', component: StandortListComponent},
  {path: 'standort/add', component: StandortFormComponent}
];

