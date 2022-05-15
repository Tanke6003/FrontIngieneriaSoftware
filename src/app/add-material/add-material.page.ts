
import { Component, OnInit } from '@angular/core';
import { AddMaterialService } from './add-material.service';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Events } from 'src/events';
import { Alerts } from 'src/alerts';
import * as moment from 'moment';
@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.page.html',
  styleUrls: ['./add-material.page.scss'],
  providers:[AddMaterialService]
})
export class AddMaterialPage implements OnInit {
  idMaterial: number;
  addMaterialForm : FormGroup;
  constructor(private _AddMaterialService:AddMaterialService,public _FormBuilder:FormBuilder,public _NavController:NavController,public _Events:Events,private _Alerts:Alerts) { 
    this._AddMaterialService.getLastId().subscribe((res)=>{
      this.idMaterial = res.idMaterial + 1  
    },(error)=>{
      console.log(error)
    });
    this.addMaterialForm = this._FormBuilder.group({
      'name':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[A-Za-z ]+$")])),
      'stock':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[0-9]+$")])),
      'description':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[A-Za-z0-9 ]+$")])),
    })
  }
  ngOnInit() {
  }
  ionViewWillLeave(){
    this.addMaterialForm.reset();
  }
  save(){
    if(this.addMaterialForm.invalid)
      return this._Alerts.presentAlert("NO SE PUDO GUARDAR","no",['ok','cancel']);
    let data = this.addMaterialForm.value;
    this._AddMaterialService.saveMaterial(data).subscribe((res)=>{  
      this._Events.materialsChangeSubject.next();
      if(res.status)  
        this._NavController.navigateForward('menu/materials');
    },(error) =>{
      console.log(error);
    }); 
  }

}
