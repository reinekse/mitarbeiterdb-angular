import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Standort} from "../../../model/standort";
import {StandortService} from "../../../service/standort-service.service";

@Component({
  selector: 'app-standort-add',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './standort-add.component.html',
  styleUrl: './standort-add.component.css'
})
export class StandortAddComponent {
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
