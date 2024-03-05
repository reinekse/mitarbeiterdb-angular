import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonAddFormComponent} from './person-add-form.component';

describe('PersonAddComponent', () => {
  let component: PersonAddFormComponent;
  let fixture: ComponentFixture<PersonAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonAddFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersonAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
