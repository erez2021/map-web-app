import { Component } from '@angular/core';
import { Ring } from 'src/models/ring.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  maxLocations: number = 20;
  isModalOpen: boolean = false;
  isDarkMode: boolean = false;
  buttonText: string = 'Dark mode';
  modalTitle: string = '';
  ringData: Ring[] = [];
  ringDataToDisplay: Ring[] = [];

  onCloseModal() {
    this.isModalOpen = false;
  }

  onAddRingData(event: Ring) {
    const locationExists = this.ringData.some((obj) => {
      return (
        obj.latitude === event.latitude && obj.longitude === event.longitude
      );
    });
    if (this.ringData.length < this.maxLocations && !locationExists) {
      this.ringData = [...this.ringData, event];
    } else if (this.ringData.length === this.maxLocations) {
      this.isModalOpen = true;
      this.modalTitle = 'The list contains maximum of 20 items';
    } else if (locationExists) {
      this.isModalOpen = true;
      this.modalTitle = 'This location is already exists in the list';
    }
  }

  onUpdateSelectedRings(event: any) {
    this.ringDataToDisplay = event;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.buttonText = this.isDarkMode ? 'Light mode' : 'Dark mode';
    this.updateBodyBackgroundColor();
  }

  updateBodyBackgroundColor() {
    const body = document.querySelector('body');
    if (body) {
      body.style.backgroundColor = this.isDarkMode
        ? 'rgb(24, 20, 20)'
        : 'lightblue';
    }
  }
}
