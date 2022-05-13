import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Config } from 'src/config';
import { Observable } from 'rxjs';
@Injectable()
export class AddEmployeeService {
    apiEndpoint: string;
    constructor(private _http: HttpClient, private config: Config) {this.apiEndpoint = this.config.API_MAIN;}
    saveEmployee(data): Observable<any> {
        return this._http.post(this.apiEndpoint + 'employees/registerEmployee',data);
    }
    getLastId(): Observable<any> {
        return this._http.get(this.apiEndpoint + 'employees/getLastId');
    }
}   