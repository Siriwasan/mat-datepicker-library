import {
  Component,
  VERSION as ANGULARVERSION,
  AfterContentInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { VERSION as MATERIALVERSION } from '@angular/material/core';

const PW_DATE_FORMATS = {
  parse: {
    dateInput: 'LLL',
    datetime: 'LLL',
    date: 'L',
    time: 'LT',
  },
  display: {
    dateInput: 'LLL',
    date: 'LL',
    datetime: 'LLL',
    time: 'LT',
    dateA11yLabel: 'L',
    monthDayLabel: 'D MMM',
    monthDayA11yLabel: 'D MMMM',
    monthYearLabel: 'MMMM YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
    timeLabel: 'LT',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('dateInput') dateInput: ElementRef;

  versionAngular: string;
  versionMaterial: string;

  constructor() {
    this.versionAngular = ANGULARVERSION.full;
    this.versionMaterial = MATERIALVERSION.full;
  }

  ngAfterViewInit(): void {
    console.log(this.dateInput);
    // this.dateInput.nativeElement.disabled = false;
  }

  ngAfterContentInit(): void {
    console.log(this.dateInput);
  }
}
