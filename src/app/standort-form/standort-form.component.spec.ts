import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandortFormComponent } from './standort-form.component';

describe('StandortFormComponent', () => {
  let component: StandortFormComponent;
  let fixture: ComponentFixture<StandortFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandortFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandortFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
