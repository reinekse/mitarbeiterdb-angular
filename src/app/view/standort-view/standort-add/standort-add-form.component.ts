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
  templateUrl: './standort-add-form.component.html',
  styleUrl: './standort-add-form.component.css'
})
export class StandortAddFormComponent {
  standort: Standort;

  constructor(
    private router: Router,
    private standortService: StandortService) {
    this.standort = new Standort();
  }

  onSubmit() {
    this.standortService.save(this.standort).subscribe(result => this.gotoStandortIndex());
  }

  gotoStandortIndex() {
    this.router.navigate(['/standort/index']);
  }
}
