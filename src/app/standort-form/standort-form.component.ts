import {Component} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {Standort} from "../model/standort";
import {StandortService} from "../service/standort-service.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-standort-form',
  standalone: true,
  imports: [CommonModule, RouterModule,
    FormsModule
  ],
  templateUrl: './standort-form.component.html',
  styleUrl: './standort-form.component.css'
})
export class StandortFormComponent {
  standort: Standort;

  constructor(
    private router: Router,
    private standortService: StandortService) {
    this.standort = new Standort();
  }

  onSubmit() {
    this.standortService.save(this.standort).subscribe(result => this.gotoStandortList());
  }

  gotoStandortList() {
    this.router.navigate(['/standort/all']);
  }
}
