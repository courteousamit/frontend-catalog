import { Component, OnInit } from '@angular/core';
import { catalogHead, catalogLine } from '../local-data/catalogue-data';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  public catalogHead: Object;
  public catalogLine: Object[];
  public itemQuantityRequired: number = 20; // hard-coded for now
  public itemTotalPrice: number = 20; // hard-coded for now
  public itemDeliveryCost: string = "12.06"; // hard-coded for now
  public itemDeliveryDate: string = "w 19/04"; // hard-coded for now

  constructor() { }

  ngOnInit() {
    this.catalogHead = JSON.parse(catalogHead);
    this.catalogLine = catalogLine;
  }

  calculateItemTotalPrice(itemUnitPrice) {
    return itemUnitPrice*this.itemQuantityRequired;
  };

  

  addToCart():void {

  }

}
