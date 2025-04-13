import { Component, Input, OnInit } from '@angular/core';
import { fadeUp2, fadeUp3 } from 'src/app/share/services/animations';
import { urls } from 'src/environments/environment';
import { collection } from '../../catalog-page.component';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
import { TokenManage } from 'src/app/share/services/token-manage.service';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.css'],
  animations: [fadeUp2, fadeUp3],
})
export class CatalogCardComponent implements OnInit {
  url: string = urls.url;
  @Input() collection: collection;
  @Input() index: number;
  show: boolean;
  imagePath: string;
  constructor(private alerts: AlertManage, private auth: TokenManage) {}
  ngOnInit(): void {
    this.index % 2 === 0 ? (this.show = false) : (this.show = true);
    this.imagePath = encodeURI(
      this.url +
        'classapi/images/collections/banner/' +
        this.collection.urlBanner
    );
  }
  downloadCollection(document: string) {
    this.auth.isLogged.value
      ? window.open(
          encodeURI(this.url + 'classapi/images/collections/file/' + document)
        )
      : this.openingAlert();
    console.log(document);
  }
  openingAlert() {
    this.alerts.setAlertMessage('signingRequired');
    console.log('No');
  }
}
