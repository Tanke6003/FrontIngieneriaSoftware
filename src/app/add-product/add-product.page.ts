import { Component, OnInit } from '@angular/core';
import { AddProductService } from './add-product.service';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Events } from 'src/events';
import { Alerts } from 'src/alerts';
import * as moment from 'moment';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  providers:[AddProductService]
})
export class AddProductPage implements OnInit {
  idProduct: number;
  addProductForm : FormGroup;
  constructor(private _AddProductService: AddProductService,public _FormBuilder:FormBuilder,public _NavController:NavController,public _Events:Events,private _Alerts:Alerts) { 
    this._AddProductService.getLastId().subscribe((res)=>{
      this.idProduct = res.idProduct + 1  
    },(error)=>{
      console.log(error)
    });
  }

  ngOnInit() {
  }

}
