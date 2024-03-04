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


  test() {
    console.log("test");
    this.standorte.forEach(standort => {
      console.log(standort.ort);
    });
  }

  deleteStandort(id: string) {
    this.standortService.delete(id).subscribe(res => {

      this.standorte = this.standorte.filter(standort => standort.id !== id);

      console.log(`Standort ${id} wurde erfolgreich gelöscht`);

    });
  }
}
