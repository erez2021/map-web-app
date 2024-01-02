import { Component, Output, EventEmitter } from '@angular/core';
import { Ring } from 'src/models/ring.interface';
import { generateRandomHexColor } from 'src/utils/util';

@Component({
  selector: 'app-fetch-ring-data',
  templateUrl: './fetch-ring-data.component.html',
  styleUrls: ['./fetch-ring-data.component.scss'],
})
export class FetchRingDataComponent {
  @Output() addRingData: EventEmitter<Ring> = new EventEmitter<Ring>();

  ringData: Ring = {
    latitude: 32.25,
    longitude: 34.8,
    radius: 15000,
    color: '',
    isSelected: false,
  };

  get areAllFieldsFilled(): boolean {
    return (
      this.ringData.latitude > 0 &&
      this.ringData.longitude > 0 &&
      this.ringData.radius > 0
    );
  }

  checkLength(event: any) {
    if (event.target.value.length > 5) {
      event.preventDefault();
    }
  }

  onSubmit() {
    if (this.areAllFieldsFilled) {
      const newRingData: Ring = {
        ...this.ringData,
        color: generateRandomHexColor(),
      };
      this.addRingData.emit(newRingData);
    }
  }
}
