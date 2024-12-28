import { Component } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { StayListingComponent } from '../stay-listing/stay-listing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DpDatePickerModule,
    StayListingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  datePickerConfig = {
    format: 'DD/MM/YYYY'
  }
}
