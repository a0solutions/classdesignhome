import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'classdesign';
  @ViewChild('mainContent')
  private mainContentDiv!: ElementRef<HTMLElement>;
  loader: boolean;
  message: any;
  show: boolean;
  constructor(private readonly route: Router) {}
  onActivate(_event: any): void {
    if (this.mainContentDiv) {
      (this.mainContentDiv.nativeElement as HTMLElement).scrollTop = 0;
    }
  }
}
