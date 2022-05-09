import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  public paginas =[
    {
      titulo:'Empleados',
      url:'/menu/Employees',
      icon:'alert'
    }
  ];
  selectedIndex: number;
  constructor(public navCtrl:NavController,){}
  ngOnInit() {
  }
  changeSelectedIndex(index: number) {
      this.selectedIndex = index
    }
}
