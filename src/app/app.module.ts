import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from '../components/google-map/google-map.component';
import { RingDataComponent } from '../components/ring-data/ring-data.component';
import { FetchRingDataComponent } from '../components/fetch-ring-data/fetch-ring-data.component';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    RingDataComponent,
    FetchRingDataComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, GoogleMapsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
