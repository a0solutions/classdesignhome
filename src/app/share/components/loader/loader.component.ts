import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { fadeLoader } from '../../services/animations';
import { urls } from 'src/environments/environment';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [fadeLoader],
})
export class LoaderComponent implements OnInit {
  @Input() show = true;
  constructor(private loader: LoaderService) {}
  url: string = urls.url;

  ngOnInit(): void {
    this.loader.show.subscribe((x) => {
      this.show = x;
    });
  }
}
