import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingDataComponent } from './ring-data.component';

describe('RingDataComponent', () => {
  let component: RingDataComponent;
  let fixture: ComponentFixture<RingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
