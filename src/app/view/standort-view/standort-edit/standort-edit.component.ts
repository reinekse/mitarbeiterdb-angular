import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {StandortService} from "../../../service/standort-service.service";

@Component({
  selector: 'app-standort-edit',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './standort-edit.component.html',
  styleUrl: './standort-edit.component.css'
})
export class StandortEditComponent {
  constructor(private standortService: StandortService) {
  }
}
