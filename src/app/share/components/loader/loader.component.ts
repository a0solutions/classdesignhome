import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  @Input() show: boolean = true;
  constructor(private loader: LoaderService) {}
  ngOnInit(): void {
    this.loader.show.subscribe((x) => {
      this.show = x;
    });
  }
}
