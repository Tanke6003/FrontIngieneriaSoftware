import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Config } from 'src/config';
import { Observable } from 'rxjs';
@Injectable()
export class AddProductService {
    apiEndpoint: string;
    constructor(private _http: HttpClient, private config: Config) {this.apiEndpoint = this.config.API_MAIN;}
    getLastId(): Observable<any> {
        return this._http.get(this.apiEndpoint + 'products/getLastId');
    }
    saveProduct(data): Observable<any> {
        return this._http.post(this.apiEndpoint + 'products/registerProduct',data);
    }
}   