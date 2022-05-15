import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Events } from 'src/events';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  providers:[ProductsService]
})
export class ProductsPage implements OnInit {
  products : Array<any>;
  searchData :string = "";
  message:string = "";
  constructor(private _ProductsService:ProductsService,public _Events:Events) {
    this.showProducts(this.searchData);
  }
  ngOnInit() {
  }
  Search($event){
    this.searchData = $event.target.value;
    this.showProducts(this.searchData);
  }
  showProducts(searchStr:string){
    let data ={ "product" : searchStr }
    this._ProductsService.getProducts(data).subscribe((res)=>{  
      this.products = res.product;
      this.message = res.errorMessage;
    },(error) =>{
      console.log(error);
    });
  } 
}
