import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
    // console.log('http.service.ts')
    // this.getTasks();
  }

  getTasks(){
    console.log('Getting All Tasks')
    return this._http.get('/tasks');
  }

  getOneTask(reqTask) {
    console.log("Getting one task");
    let pStr = "/tasks/" + reqTask['id']
    console.log("str: ", pStr)
    return this._http.get(pStr);
    // tmpObs.subscribe(data => console.log('Got one task', data));   
  }

}
