import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";
import {Person} from "../../../model/person";
import {PersonService} from "../../../service/person-service.service";

@Component({
  selector: 'app-person-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './person-add-form.component.html',
  styleUrl: './person-add-form.component.css'
})
export class PersonAddFormComponent {

  person: Person;

  constructor(
    private router: Router,
    private personService: PersonService) {
    this.person = new Person();
  }

  onSubmit() {
    this.personService.save(this.person).subscribe(result => this.gotoPersonIndex());
  }


  gotoPersonIndex() {
    this.router.navigate(['/person/index']);
  }
}
