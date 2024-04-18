import { Component, OnInit } from '@angular/core';
import { fadeLeft, fadeUp } from '../../services/animations';

@Component({
  selector: 'app-goUp',
  templateUrl: './goUp.component.html',
  styleUrls: ['./goUp.component.css'],
  animations: [fadeLeft],
})
export class GoUpComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  goUp(): void {
    window.scrollTo(0, 0);
  }
}
