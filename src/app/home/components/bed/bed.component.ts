import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { urls } from 'src/app/share/services/apiurl';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css'],
})
export class BedComponent {
  url: string = urls.url;
  constructor(private route: Router) {}
  navigate(route: string): void {
    this.route.navigate(['/products/' + route]);
  }
}
