import { NgModule } from "@angular/core";
import { Subject, Observable } from 'rxjs'

@NgModule()
export class Events {

    noteChangeSubject: Subject<any> = new Subject();

    noteChange: Observable<any> = this.noteChangeSubject.asObservable();

    constructor(){
        
    }
}