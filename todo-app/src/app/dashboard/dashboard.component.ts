import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../app.model';
import {TodoServiceService} from '../todo-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: TodoItem[];


  constructor(private todoservice:TodoServiceService){
    this.items = todoservice.todolist;
  }

  getItems():TodoItem[]{
    return this.todoservice.todolist;
  }
  ngOnInit(){}
}
