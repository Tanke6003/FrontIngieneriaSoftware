
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
  constructor(private _AddMaterialService:AddMaterialService,public _FormBuilder:FormBuilder,public _NavController:NavController,public _Events:Events,private _Alerts:Alerts) { 
    this._AddMaterialService.getLastId().subscribe((res)=>{
      this.idMaterial = res.idMaterial + 1  
    },(error)=>{
      console.log(error)
    });
  }

  ngOnInit() {
  }

}
