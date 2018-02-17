import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks = [];
  reqTask = {id: "", name: ""};

  ngOnInit() {
    // this.getTasksFromService();
  }

  constructor (private _httpService: HttpService) {}

  getTasksFromService(): void {
    console.log("get all tasks")
    let tsks = this._httpService.getTasks();
    tsks.subscribe(data => {
      console.log('Got tasks', data);
      this.tasks = data['data'];
      console.log("tasks: ", this.tasks)
    });
  }

  getTask(event): void{
    if (event.target.value) {
      this.reqTask.id = event.target.value;
      console.log("event: ", event.target.value);
      let Obs = this._httpService.getOneTask(this.reqTask);
      Obs.subscribe(data => {
        console.log('Got one task', data);
        this.reqTask.name = data['data']['name'];
      });
    } else {
      this.reqTask.id = '';
      this.reqTask.name = '';
    }
  }


  getOneTaskFromService(): void {
    console.log("component get task")
    let Obs = this._httpService.getOneTask(this.reqTask);
    Obs.subscribe(data => {
      console.log('Got one task', data);
      this.reqTask.id = data['data']['_id'];
      this.reqTask.name = data['data']['name'];
      console.log(this.reqTask)
    })   
  }
}
