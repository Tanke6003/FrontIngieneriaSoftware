import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Events } from 'src/events';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
  providers:[EmployeesService]
})
export class EmployeesPage implements OnInit {
    employees : Array<any>;
    searchData :string = "";
    message:string = "";
  constructor(private _EmployeesService: EmployeesService,public _Events:Events) {
      this.showEmployees(this.searchData);
      this._Events.employeesChange.subscribe(()=>{this.showEmployees(this.searchData)});
   }
  ngOnInit() {
  }
  Search($event){
    this.searchData = $event.target.value;
    this.showEmployees(this.searchData);
  }
  showEmployees(searchStr:string){
    let data ={ "employee" : searchStr }
    this._EmployeesService.getEmployees(data).subscribe((res)=>{  
      this.employees = res.Employees;
      this.message = res.errorMessage;
    },(error) =>{
      console.log(error);
    });
  }
}
