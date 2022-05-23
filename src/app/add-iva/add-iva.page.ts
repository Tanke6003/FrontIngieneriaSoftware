import { Component, OnInit } from '@angular/core';
import { AddIvaService } from './add-iva.service';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Events } from 'src/events';
import { Alerts } from 'src/alerts';
import * as moment from 'moment';
@Component({
  selector: 'app-add-iva',
  templateUrl: './add-iva.page.html',
  styleUrls: ['./add-iva.page.scss'],
  providers:[AddIvaService]
})
export class AddIvaPage implements OnInit {
  idIva: number;
  addIvaForm : FormGroup;
  constructor(private _AddIvaService: AddIvaService,public _FormBuilder:FormBuilder,public _NavController:NavController,public _Events:Events,private _Alerts:Alerts) {
    this._AddIvaService.getLastId().subscribe((res)=>{
      res.idIva + 1  
    },(error)=>{
      console.log(error)
    });
    this.addIvaForm = this._FormBuilder.group({
      'porcentaje':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^([0-9]{2})+.+([0-9]{2})$")])),
    })
   }

  ngOnInit() {
  }

}
