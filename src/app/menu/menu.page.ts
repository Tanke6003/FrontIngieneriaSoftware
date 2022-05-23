import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  datenow = moment().format('LLL');
  public paginas =[
    {
      titulo:'Empleados',
      url:'/menu/employees',
      icon:'alert'
    },
    {
      titulo:'Materias Primas',
      url:'/menu/materials',
      icon:'alert'
    },
    {
      titulo:'Productos',
      url:'/menu/products',
      icon:'alert'
    }
    ,
    {
      titulo:'Iva',
      url:'/menu/ivas',
      icon:'alert'
    }
  ];
  selectedIndex: number;
  constructor(public navCtrl:NavController,){
    setInterval(()=>this.datenow = moment().format('LLL'),30000)
  }
  ngOnInit() {
    
  }
  changeSelectedIndex(index: number) {
      this.selectedIndex = index
    }
}
