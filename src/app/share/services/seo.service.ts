import { Injectable, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SeoService implements OnInit {
  title: string = 'PRUEBA';
  image: string = 'PRUEBA';
  description: string = 'PRUEBA';
  constructor(private meta: Meta, private router: Router) {}
  ngOnInit(): void {}

  setSeo(title?: string, description?: string, image?: string): void {
    let route = this.router.url;
    console.log(route.substr(0, 9));

    this.title = 'Class Design Home - ' + route.substr(1, route.length);
    this.image = 'https://testing.classdesign.us/classapi/images/logo.png';
    this.description =
      "At Class Design Home, we believe that every piece of furniture is a canvas for creating warmth and togetherness in the family home. Our designs serve not just a function, but as pillars of shared moments and cherished memories. Each creation carries the essence of family, designed to enrich your home with a warmth that's felt in every wood grain and fabric stitch.";
    this.placeMetaData();

    if (route.substr(0, 8).toString() == '/product') {
      this.title = 'Class Design Home - ' + title;
      this.image = <string>image;
      this.description = <string>description;
    }

    this.placeMetaData();
  }
  placeMetaData(): void {
    this.meta.updateTag({ property: 'og:title', content: this.title });
    this.meta.updateTag({ property: 'og:image', content: this.image });
    this.meta.updateTag({ property: 'og:url', content: window.location.href });
    this.meta.updateTag({ property: 'og:image', content: this.image });
    this.meta.updateTag({
      property: 'og:description',
      content: this.description,
    });
  }
}