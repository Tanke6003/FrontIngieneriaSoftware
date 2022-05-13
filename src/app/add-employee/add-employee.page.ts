import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AddEmployeeService } from './add-employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
  providers:[AddEmployeeService]
})
export class AddEmployeePage implements OnInit {
  addEmployeeForm : FormGroup;
  constructor( private _AddEmployeeService:AddEmployeeService,public _FormBuilder:FormBuilder,public _NavController:NavController) { 
    this.addEmployeeForm = this._FormBuilder.group({
      'name':new FormControl("",Validators.required),
      'rfc':new FormControl("",Validators.required),
      'position':new FormControl("",Validators.required),
      'birthday':new FormControl("",Validators.required),
      'phone':new FormControl("",Validators.required),
      'salary':new FormControl("",Validators.required),
    })
  }

  ngOnInit() {
  }
  save(){
    let data = this.addEmployeeForm.value;
    this._AddEmployeeService.saveEmployee(data).subscribe((res)=>{
      if(res.status)  
        this._NavController.navigateForward('menu/employees');
    },(error) =>{
      console.log(error);
    });
  }
}
