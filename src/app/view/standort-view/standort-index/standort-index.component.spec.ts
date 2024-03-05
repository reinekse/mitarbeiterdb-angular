import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StandortIndexComponent} from './standort-index.component';

describe('StandortListComponent', () => {
  let component: StandortIndexComponent;
  let fixture: ComponentFixture<StandortIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandortIndexComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StandortIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
