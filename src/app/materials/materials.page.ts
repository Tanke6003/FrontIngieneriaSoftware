import { Component, OnInit } from '@angular/core';
import { MaterialsService } from './materials.service';
import { Events } from 'src/events';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
  providers:[MaterialsService]
})
export class MaterialsPage implements OnInit {
  materials : Array<any>;
  searchData :string = "";
  message:string = "";
  constructor(private _MaterialsService: MaterialsService,public _Events:Events) { 
    this.showMaterials(this.searchData)
    this._Events.materialsChange.subscribe(()=>{this.showMaterials(this.searchData)});
  }

  ngOnInit() {
  }
  showMaterials(searchStr:string){
    
    let data ={ "material" : searchStr }
    this._MaterialsService.getMaterials(data).subscribe((res)=>{  
      console.log(res.Materials[0].description)
      this.materials = res.Materials;
      this.message = res.errorMessage;
    },(error) =>{
      console.log(error);
    });
  } 
  Search($event){
    this.searchData = $event.target.value;
    this.showMaterials(this.searchData);
  }
}
