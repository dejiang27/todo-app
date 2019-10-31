import { Component, OnInit, Input } from '@angular/core';
import { TodoServiceService} from '../todo-service.service';
import { TodoItem } from '../app.model';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoitem: TodoItem;

  constructor(private todoservice: TodoServiceService) { 
    this.todoservice = todoservice;
  
  }

  ngOnInit() {
  }

  setDueDate(todoDis:string,dates:string){
    this.todoservice.updateTask(todoDis, dates);
  }

  DeleteItem(todoDIs:string){
    this.todoservice.deleteTask(todoDIs);
    console.log("Deleted:" +todoDIs);


  }


}
