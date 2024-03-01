import {Component, OnInit} from '@angular/core';
import {Standort} from "../../../model/standort";
import {StandortService} from "../../../service/standort-service.service";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-standort-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './standort-index.component.html',
  styleUrl: './standort-index.component.css'
})
export class StandortIndexComponent implements OnInit {

  standorte: Standort[] = [];

  constructor(private standortService: StandortService) {
  }

  ngOnInit() {
    this.standortService.findAll().subscribe(data => {
      this.standorte = data;
    });
  }
}
