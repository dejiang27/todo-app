import { Component } from '@angular/core';
import { TodoItem } from './app.model';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  items: TodoItem[];


  constructor(private todoservice:TodoServiceService){
    this.items = todoservice.todolist;
  }

  getItems():TodoItem[]{
    return this.todoservice.todolist;
  }
}
