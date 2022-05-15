import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { ViewEmployeeService } from './view-employee.service'
import { Events } from 'src/events';
import { Alerts } from 'src/alerts';
import * as moment from 'moment';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.page.html',
  styleUrls: ['./view-employee.page.scss'],
  providers:[ViewEmployeeService]
})
export class ViewEmployeePage implements OnInit {
  employeeForm : FormGroup;
  idEmployee: number;
  edit:boolean = true;
  employee: any;
  constructor(private _ViewEmployeeService:ViewEmployeeService,private _ActivedRoute: ActivatedRoute,public _FormBuilder:FormBuilder,public _NavController:NavController,public _Events:Events,private _Alerts:Alerts) { 
    this.employeeForm = this._FormBuilder.group({
      'name':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[A-Za-z ]+$")])),
      'rfc':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^([A-Z]{4})+([0-9]{6})+([A-Z0-9]{3})+$")])),
      'position':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[A-Za-z ]+$")])),
      'birthday':new FormControl("",Validators.required),
      'phone':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[0-9]+$")])),
      'salary':new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[0-9]+$")])),
    })
  }
  ionViewWillLeave(){
    this.employeeForm.reset();
    this.edit = true;
  }
  ngOnInit() {
    this.idEmployee = this._ActivedRoute.snapshot.params.idEmployee;
    this._ViewEmployeeService.getEmployee({ "employee" : this.idEmployee }).subscribe((res)=>{
      this.employee = res.Employees[0]
      this.employeeForm.controls['name'].setValue(this.employee.name);
      this.employeeForm.controls['rfc'].setValue(this.employee.rfc);
      this.employeeForm.controls['position'].setValue(this.employee.position);
      this.employeeForm.controls['phone'].setValue(this.employee.phone);
      this.employeeForm.controls['salary'].setValue(this.employee.salary);
      this.employeeForm.controls['birthday'].setValue(moment(this.employee.birthday).format('l'));
    },(error) =>{
      console.log(error);
    });
  }
  editable(){
    this.edit=!this.edit
  }
  save(){
    const dateB = moment();
    const dateC = moment(this.employeeForm.value.birthday);
    if(dateB.diff(dateC,'years')<18)
      return this._Alerts.presentAlert("No se pudo generar registro !!","La edad es menor a 18 años");
    if(this.employeeForm.invalid)
      return this._Alerts.presentAlert("NO SE PUDO GUARDAR","no",['ok','cancel']);
    let data = this.employeeForm.value;
    data.idEmployee = this.idEmployee;
    data.status = this.employee.status;
    this._ViewEmployeeService.editEmployee(data).subscribe((res)=>{  
      this._Events.employeesChangeSubject.next();
      if(res.status)  
        this._NavController.navigateForward('menu/employees');
    },(error) =>{
      console.log(error);
    }); 
  }
  changeStatus(){
    if(this.employee.status)
      this.employee.status = false;
    else
      this.employee.status = true;
    let data = this.employee
    this._ViewEmployeeService.editEmployee(data).subscribe((res)=>{  
      this._Events.employeesChangeSubject.next();
      if(res.status)  
        this._NavController.navigateForward('menu/employees');
    },(error) =>{
      console.log(error);
    }); 
  }
}
