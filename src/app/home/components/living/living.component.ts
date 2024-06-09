import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { urls } from 'src/app/share/services/apiurl';

@Component({
  selector: 'app-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.css'],
})
export class LivingComponent {
  url: string = urls.url;
  constructor(private route: Router) {}
  navigate(route: string): void {
    this.route.navigate(['/products/' + route]);
  }
}
