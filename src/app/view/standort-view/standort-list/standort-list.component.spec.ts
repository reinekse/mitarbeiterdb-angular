import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandortListComponent } from './standort-list.component';

describe('StandortListComponent', () => {
  let component: StandortListComponent;
  let fixture: ComponentFixture<StandortListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandortListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
