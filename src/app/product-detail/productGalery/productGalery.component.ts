import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'productGalery',
  templateUrl: './productGalery.component.html',
  styleUrls: ['./productGalery.component.css'],
})
export class ProductGalery implements OnInit {
  image: boolean[] = [true, false, false, false];
  constructor() {}

  ngOnInit() {}
  updatePicture(picture: any, detail: any, img: number) {
    let src = picture.target.src;
    for (let img in this.image) {
      this.image[img] = false;
    }

    this.image[img] = true;
    detail.src = src;
  }
}
