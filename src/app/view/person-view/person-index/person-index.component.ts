import {Component, OnInit} from '@angular/core';
import {Person} from "../../../model/person";
import {PersonService} from "../../../service/person-service.service";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './person-index.component.html',
  styleUrl: './person-index.component.css'
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
}
