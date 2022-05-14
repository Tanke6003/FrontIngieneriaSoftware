import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {
  searchData :string = "";
  constructor() { }

  ngOnInit() {
  }
  Search($event){
    this.searchData = $event.target.value;
    //this.showEmployees(this.searchData);
  }
}
