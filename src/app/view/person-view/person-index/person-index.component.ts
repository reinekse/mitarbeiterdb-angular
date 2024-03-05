import {Component, OnInit} from '@angular/core';
import {Person} from "../../../model/person";
import {PersonService} from "../../../service/person-service.service";
import {CommonModule, DatePipe} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './person-index.component.html',
  styleUrl: './person-index.component.css',
  providers: [DatePipe]
})
export class PersonIndexComponent implements OnInit {

  personen: Person[] = [];

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.personService.findAll().subscribe(data => {
      this.personen = data;
    });
  }

  deletePerson(id: string) {
    this.personService.delete(id).subscribe(res => {

      this.personen = this.personen.filter(person => person.id !== id);

    });
  }
}
