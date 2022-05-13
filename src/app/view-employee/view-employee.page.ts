import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { ViewEmployeeService } from './view-employee.service'

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.page.html',
  styleUrls: ['./view-employee.page.scss'],
  providers:[ViewEmployeeService]
})
export class ViewEmployeePage implements OnInit {
  employeeForm : FormGroup;
  idEmployee: number;
  constructor(private _ViewEmployeeService:ViewEmployeeService,private _ActivedRoute: ActivatedRoute,public _FormBuilder:FormBuilder,public _NavController:NavController) { 
    this.employeeForm = this._FormBuilder.group({
      'name':new FormControl("",Validators.required),
      'rfc':new FormControl("",Validators.required),
      'position':new FormControl("",Validators.required),
      'birthday':new FormControl("",Validators.required),
      'phone':new FormControl("",Validators.required),
      'salary':new FormControl("",Validators.required),
    })
  }
  ngOnInit() {
    this.idEmployee = this._ActivedRoute.snapshot.params.idEmployee;
    console.log(this.idEmployee)
    this._ViewEmployeeService.getEmployee({ "employee" : this.idEmployee }).subscribe((res)=>{
      let employee = res.Employees[0]
      this.employeeForm.controls['name']
    },(error) =>{
      console.log(error);
    });
  }

}