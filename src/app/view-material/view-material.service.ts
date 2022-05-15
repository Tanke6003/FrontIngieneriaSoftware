import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Config } from 'src/config';
import { Observable } from 'rxjs';
@Injectable()
export class ViewMaterialService {
    apiEndpoint: string;
    constructor(private _http: HttpClient, private config: Config) {this.apiEndpoint = this.config.API_MAIN;}
    getMaterials(data): Observable<any> {
        return this._http.post(this.apiEndpoint + 'materials',data);
    }
    editMaterial(data): Observable<any> {
        return this._http.post(this.apiEndpoint + 'materials/edit',data);
    }
}   