import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StandortAddFormComponent} from './standort-add-form.component';

describe('StandortAddComponent', () => {
  let component: StandortAddFormComponent;
  let fixture: ComponentFixture<StandortAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandortAddFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StandortAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
