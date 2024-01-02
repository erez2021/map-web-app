import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchRingDataComponent } from './fetch-ring-data.component';

describe('FetchRingDataComponent', () => {
  let component: FetchRingDataComponent;
  let fixture: ComponentFixture<FetchRingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchRingDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchRingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
