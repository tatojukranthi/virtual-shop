import { Component } from '@angular/core';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  constructor() { }

  itemName: string;
  itemDescription: string;
  itemImages: string[];
  itemMasterImageUrl: string;
  

  ngOnInit(): void {

    this.itemName = "Eggs"
    this.itemDescription = "This are the products from our south Dokota Hens raise in a very better condition then humans, so dont think twice before getting them."
    this.itemMasterImageUrl = "https://assets.tetrapak.com/static/publishingimages/find-by-food/rollup/food/eggs.jpg";
    this.itemImages = ["https://assets.tetrapak.com/static/publishingimages/find-by-food/rollup/food/eggs.jpg","https://assets.bwbx.io/images/users/iqjWHBFdfxIU/irbUB72miveM/v0/1000x-1.jpg","https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/7/0/RX_Vital-Farms-Pasterized-Eggs.jpg.rend.hgtvcom.616.462.suffix/1565201195045.jpeg"];

  }

}
