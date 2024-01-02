import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ring } from 'src/models/ring.interface';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnChanges {
  @Input() ringDataToDisplay: Ring[] = [];
  ringWidth: number = 2;

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['ringDataToDisplay'] &&
      changes['ringDataToDisplay'].currentValue
    ) {
      this.ringDataToDisplay = changes['ringDataToDisplay'].currentValue;
    }
  }

  getCircleOptions(location: Ring): google.maps.CircleOptions {
    const { radius, latitude, longitude, color } = location;
    return {
      strokeColor: color,
      strokeWeight: this.ringWidth,
      fillColor: color,
      fillOpacity: 0.2,
      center: { lat: latitude, lng: longitude },
      radius: radius,
    };
  }

  mapOptions: google.maps.MapOptions = {
    center: { lat: 31.5, lng: 34.5 },
    zoom: 8,
  };
}
