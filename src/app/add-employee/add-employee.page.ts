import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AddEmployeeService } from './add-employee.service';
import { Events } from 'src/events';
import { Alerts } from 'src/alerts';
import * as moment from 'moment';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
  providers:[AddEmployeeService]
})
export class AddEmployeePage implements OnInit {
  addEmployeeForm : FormGroup;
  constructor( private _AddEmployeeService:AddEmployeeService,public _FormBuilder:FormBuilder,public _NavController:NavController,public _Events:Events,private _Alerts:Alerts) { 
    this.addEmployeeForm = this._FormBuilder.group({
      'name':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[A-Za-z ]+$")])),
      //'name':new FormControl("",Validators.required),
      'rfc':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^([A-Z]{4})+([0-9]{6})+([A-Z0-9]{3})+$")])),
      'position':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[A-Za-z ]+$")])),
      'birthday':new FormControl("",Validators.required),
      'phone':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[0-9]+$")])),
      'salary':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[0-9]+$")])),
    })
  }
  ionViewWillLeave(){
    this.addEmployeeForm.reset();
  }
  ngOnInit() {
  }
  save(){
    const dateB = moment();
    const dateC = moment(this.addEmployeeForm.value.birthday);
    if(dateB.diff(dateC,'years')<18)
        console.log("-")
    if(this.addEmployeeForm.invalid)
      return this._Alerts.presentAlert("NO SE PUDO GUARDAR","no",['ok','cancel']);
      
    let data = this.addEmployeeForm.value;
    this._AddEmployeeService.saveEmployee(data).subscribe((res)=>{  
      this._Events.employeesChangeSubject.next();
      if(res.status)  
        this._NavController.navigateForward('menu/employees');
    },(error) =>{
      console.log(error);
    }); 
  }
}
