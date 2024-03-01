import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandortEditComponent } from './standort-edit.component';

describe('StandortEditComponent', () => {
  let component: StandortEditComponent;
  let fixture: ComponentFixture<StandortEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandortEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandortEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
