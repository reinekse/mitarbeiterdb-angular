import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandortAddComponent } from './standort-add.component';

describe('StandortAddComponent', () => {
  let component: StandortAddComponent;
  let fixture: ComponentFixture<StandortAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandortAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandortAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
