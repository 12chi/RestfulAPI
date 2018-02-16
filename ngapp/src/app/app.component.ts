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

  ngOnInit() {
    this.getTasksFromService();
  }

  constructor (private _httpService: HttpService) {}

  getTasksFromService() {
    let tsks = this._httpService.getTasks();
    tsks.subscribe(data => {
      console.log('Got tasks', data);
      this.tasks = data['data'];
      console.log("tasks: ", this.tasks)
    });
  }
}
