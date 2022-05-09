import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
  providers:[EmployeesService]
})
export class EmployeesPage implements OnInit {
  employees : Array<any>;
  constructor(private _EmployeesService: EmployeesService) {
      this.showEmployees();
   }
  ngOnInit() {
  }
  showEmployees(){
    let data ={ "employee" : ""}
    this._EmployeesService.getEmployees(data).subscribe((res)=>{  
      console.log(res)
      this.employees = res;
    },(error) =>{
      console.log(error);
    });
  }

}
