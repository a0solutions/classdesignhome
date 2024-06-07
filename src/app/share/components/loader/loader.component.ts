import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { urls } from '../../services/apiurl';
import { fade } from '../../services/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [fade],
})
export class LoaderComponent implements OnInit {
  @Input() show: boolean = true;
  constructor(private loader: LoaderService) {}
  url: string = urls.url;

  ngOnInit(): void {
    this.loader.show.subscribe((x) => {
      this.show = x;
    });
  }
}
