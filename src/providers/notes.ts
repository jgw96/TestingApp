import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Notes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Notes {

  notes: any[];

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello Notes Provider');
  }



}
