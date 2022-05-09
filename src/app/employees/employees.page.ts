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
  searchData :string = "";
  constructor(private _EmployeesService: EmployeesService) {
      this.showEmployees(this.searchData);
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
      console.log(res)
      this.employees = res;
    },(error) =>{
      console.log(error);
    });
  } 

}
