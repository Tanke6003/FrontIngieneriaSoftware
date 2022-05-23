import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inc-stock-product',
  templateUrl: './inc-stock-product.page.html',
  styleUrls: ['./inc-stock-product.page.scss'],
})
export class IncStockProductPage implements OnInit {
  idProduct: number;
  product: any;
  constructor(private _ActivedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.idProduct = this._ActivedRoute.snapshot.params.idProduct;
  }

}
