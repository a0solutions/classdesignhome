import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowroomsService } from 'src/app/share/services/showrooms.service';

@Component({
  selector: 'app-showroom-carousel',
  templateUrl: './showroom-carousel.component.html',
  styleUrls: ['./showroom-carousel.component.css'],
})
export class ShowroomCarouselComponent implements OnInit {
  showrooms: any;
  category: string;
  constructor(
    private showroomService: ShowroomsService,
    private http: ActivatedRoute
  ) {}

  ngOnInit() {
    this.http.paramMap.subscribe((x) => {
      x.get('category') != null
        ? (this.category = <string>x.get('category'))
        : (this.category = 'all');
    });
    this.trigger();
  }
  trigger() {
    this.showroomService.getShowrooms(this.category).subscribe((x) => {
      this.showrooms = x;
    });
  }
}
