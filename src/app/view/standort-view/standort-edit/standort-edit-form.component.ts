import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {StandortService} from "../../../service/standort-service.service";

@Component({
  selector: 'app-standort-edit',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './standort-edit-form.component.html',
  styleUrl: './standort-edit-form.component.css'
})
export class StandortEditFormComponent {
  constructor(private standortService: StandortService) {
  }
}
