import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StandortEditFormComponent} from './standort-edit-form.component';

describe('StandortEditComponent', () => {
  let component: StandortEditFormComponent;
  let fixture: ComponentFixture<StandortEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandortEditFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StandortEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
