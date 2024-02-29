import {Component} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {PersonService} from "../service/person-service.service";
import {Person} from "../model/person";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [
    FormsModule, CommonModule, RouterModule
  ],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css'
})
export class PersonFormComponent {
  person: Person;

  constructor(
    private router: Router,
    private personService: PersonService) {
    this.person = new Person();
  }

  onSubmit() {
    this.personService.save(this.person).subscribe(result => this.gotoPersonList());
  }

  gotoPersonList() {
    this.router.navigate(['/person/all']);
  }
}
