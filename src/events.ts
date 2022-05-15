import { NgModule } from "@angular/core";
import { Subject, Observable } from 'rxjs'

@NgModule()
export class Events {

    employeesChangeSubject: Subject<any> = new Subject();

    employeesChange: Observable<any> = this.employeesChangeSubject.asObservable();

    materialsChangeSubject: Subject<any> = new Subject();

    materialsChange: Observable<any> = this.materialsChangeSubject.asObservable();

    constructor(){
        
    }
}