import { Component, OnInit } from '@angular/core';
import { AddProductService } from './add-product.service';
import { MaterialsService } from '../materials/materials.service';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Events } from 'src/events';
import { Alerts } from 'src/alerts';
import * as moment from 'moment';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  providers:[AddProductService,MaterialsService]
})
export class AddProductPage implements OnInit {
  idProduct: number;
  addProductForm : FormGroup;
  Detail:Array<Object>;
  materials : Array<any>;
  searchData :string = "";
  message:string = "";
  selected:Object;
  quantity: number = 0;
  constructor(private _AddProductService: AddProductService,private _MaterialsService:MaterialsService,public _FormBuilder:FormBuilder,public _NavController:NavController,public _Events:Events,private _Alerts:Alerts) { 
    this._AddProductService.getLastId().subscribe((res)=>{
      this.idProduct = res.idProduct + 1  
    },(error)=>{
      console.log(error)
    });
    this.addProductForm = this._FormBuilder.group({
      'name':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[A-Za-z ]+$")])),
      'description':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[A-Za-z0-9 ]+$")])),
      'unitPrice':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^([0-9])*([.]{0})*([0-9]{2})+$")]))
    })

  }
  ionViewWillLeave(){
    this.addProductForm.reset();
  }
  ngOnInit() {
  }
  Search($event){
    this.searchData = $event.target.value;
    this.showMaterials(this.searchData);
  }
  showMaterials(searchStr:string){
    let data ={ "material" : searchStr }
    this._MaterialsService.getMaterials(data).subscribe((res)=>{  
      this.materials = res.Materials;
      this.message = res.errorMessage;
    },(error) =>{
      console.log(error);
    });
  } 
  Select(material){
    console.log(this.quantity)
    this.selected=material;
  }
  addToDetail(){
    console.log()
  }
}
