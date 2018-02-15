import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
    console.log('http.service.ts')
    this.getTasks();
    this.getOneTask('5a84b1ceeb00c24e09814210')
  }

  getTasks(){
    console.log('Begin request')
    let tmpObs = this._http.get('/tasks');
    tmpObs.subscribe(data => console.log('Got tasks', data));
  }

  getOneTask(id) {
    let tmpObs = this._http.get('/tasks/' + id);
    tmpObs.subscribe(data => console.log('Got one task', data));   
  }

}
