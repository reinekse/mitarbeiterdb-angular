import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Person} from "../../../model/person";
import {StandortService} from "../../../service/standort-service.service";
import {ActivatedRoute, Router} from "@angular/router";

import {PersonService} from "../../../service/person-service.service";

@Component({
  selector: 'app-person-edit',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './person-edit-form.component.html',
  styleUrl: './person-edit-form.component.css'
})
export class PersonEditFormComponent implements OnInit {
  standortIds: string[] = [];
  person: Person = new Person();

  constructor(private standortService: StandortService,
              private router: Router,
              private route: ActivatedRoute,
              private personService: PersonService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['personId'];
    this.personService.find(id).subscribe(data => {
        this.person = data;
      }
    )
    console.log(this.person.geburtstag);
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


