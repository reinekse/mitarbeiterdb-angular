import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";
import {Person} from "../../../model/person";
import {PersonService} from "../../../service/person-service.service";
import {StandortService} from "../../../service/standort-service.service";


@Component({
  selector: 'app-person-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './person-add-form.component.html',
  styleUrl: './person-add-form.component.css'
})
export class PersonAddFormComponent implements OnInit {
  standortIds: string[] = [];
  person: Person;

  constructor(private standortService: StandortService,
              private router: Router,
              private personService: PersonService) {
    this.person = new Person();

  }

  ngOnInit(): void {
    this.standortService.findAll().subscribe(standorte => {
      standorte.forEach(standort => {
        this.standortIds.push(standort.id);
      })
    });
  }

  onSubmit() {
    this.personService.save(this.person).subscribe(result => this.gotoPersonIndex());
  }


  gotoPersonIndex() {
    this.router.navigate(['/person/index']);
  }


}
