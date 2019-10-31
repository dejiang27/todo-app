import { Component, OnInit } from '@angular/core';
import{TodoServiceService} from '../todo-service.service';
import{TodoItem} from '../app.model';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {

  
  constructor(private todoservice:TodoServiceService) {
    this.todoservice = todoservice;
   }

  ngOnInit() {
  }


  saveTask(taskDescription:HTMLInputElement, dueDate: HTMLInputElement):boolean{
    this.todoservice.addTask(new TodoItem(taskDescription.value, dueDate.value));
    taskDescription.value = '';
    dueDate.value='';
    return false;
  }

}
