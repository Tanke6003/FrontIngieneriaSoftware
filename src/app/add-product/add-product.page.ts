import { Component, OnInit } from '@angular/core';
import { AddProductService } from './add-product.service';
import { MaterialsService } from '../materials/materials.service';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Events } from 'src/events';
import { Alerts } from 'src/alerts';
import * as moment from 'moment';

interface Select{
  idMaterial:number,
  name:string,
  unitPrice:number,
  amount?:number
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  providers:[AddProductService,MaterialsService]
})
export class AddProductPage implements OnInit {
  idProduct: number;
  addProductForm : FormGroup;
  detail:Array<Select> = [];
  materials : Array<any>;
  searchData :string = "";
  message:string = "";
  selected:Select;
  quantity: number;

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
    this.selected = material;
  }

  addToDetail(){
    if(this.quantity==null|| this.quantity==0)
      return this._Alerts.presentAlert("No se pudo generar registro !!","cantidad es menor o igual a 0");
    const exist = this.detail.find((item)=>{
      return item.idMaterial ===this.selected.idMaterial;
    })
    if(exist){
      exist.amount = parseInt(exist.amount.toString()) + parseInt(this.quantity.toString());
      return
    }
    this.selected.amount = this.quantity;
    //this.detail.push(this.selected)
    this.detail = [...this.detail,this.selected]
    this.selected = null;
    this.quantity = null;
  }

  deleteToDetail(idMaterial:number){
    this.detail = this.detail.filter((item)=>{
      return item.idMaterial != idMaterial;
    })
  }

  save(){
    if(this.detail.length<=0)
      return this._Alerts.presentAlert("No se pudo generar registro !!","cantidad de materias igual a 0");
    if(this.addProductForm.invalid)
      return this._Alerts.presentAlert("No se pudo generar registro !!","algun campo no esta correctamente  guardado");
      let data = this.addProductForm.value;
      data.detail = this.detail;
    this._AddProductService.saveProduct(data).subscribe((res)=>{
      if(res.status)  
        this._NavController.navigateForward('menu/products');
  },(error) =>{
    console.log(error);
  });
  }
}
