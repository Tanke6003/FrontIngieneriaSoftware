import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { ViewMaterialService } from './view-material.service';
import { Events } from 'src/events';
import { Alerts } from 'src/alerts';
import * as moment from 'moment';
@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.page.html',
  styleUrls: ['./view-material.page.scss'],
  providers:[ViewMaterialService]
})
export class ViewMaterialPage implements OnInit {
  materialForm : FormGroup;
  idMaterial: number;
  edit:boolean = true;
  material: any;
  constructor(private _ViewMaterialService:ViewMaterialService,private _ActivedRoute: ActivatedRoute,public _FormBuilder:FormBuilder,public _NavController:NavController,public _Events:Events,private _Alerts:Alerts) { 
    this.materialForm = this._FormBuilder.group({
      'name':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[A-Za-z ]+$")])),
      'stock':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[0-9]+$")])),
      'description':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[A-Za-z0-9 ]+$")])),
    })
  }
  ionViewWillLeave(){
    this.materialForm.reset();
    this.edit = true;
  }
  ngOnInit() {
    this.idMaterial = this._ActivedRoute.snapshot.params.idMaterial;
    this._ViewMaterialService.getMaterials({ "material" : this.idMaterial }).subscribe((res)=>{
      this.material = res.Materials[0]
      this.materialForm.controls['name'].setValue(this.material.name);
      this.materialForm.controls['stock'].setValue(this.material.stock);
      this.materialForm.controls['description'].setValue(this.material.description);
    },(error) =>{
      console.log(error);
    });
  }
  editable(){
    this.edit=!this.edit
  }
  save(){
    if(this.materialForm.invalid)
      return this._Alerts.presentAlert("NO SE PUDO GUARDAR","no",['ok','cancel']);
    let data = this.materialForm.value;
    data.idMaterial = this.idMaterial;
    data.available = this.material.available;
    this._ViewMaterialService.editMaterial(data).subscribe((res)=>{  
      this._Events.materialsChangeSubject.next();
      if(res.status)  
        this._NavController.navigateForward('menu/materials');
    },(error) =>{
      console.log(error);
    }); 
  }
  changeStatus(){
    if(this.material.available)
      this.material.available = false;
    else
      this.material.available = true;
    let data = this.material
    this._ViewMaterialService.editMaterial(data).subscribe((res)=>{  
      this._Events.materialsChangeSubject.next();
      if(res.status)  
        this._NavController.navigateForward('menu/materials');
    },(error) =>{
      console.log(error);
    }); 
  }
}
