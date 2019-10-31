import { Injectable } from '@angular/core';

import {TodoItem} from './app.model';


@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todolist: TodoItem[];

  constructor(){
    this.todolist = [new TodoItem("HW1", "urgent"), new TodoItem("HW2", "urgent"), new TodoItem("HW3", "urgent"), new TodoItem("HW4", "days"), new TodoItem("HW5", "week")];
  }

  addTask(todoitem: TodoItem){
    this.todolist.push(todoitem);
  }

  updateTask(olddis:string,newDates:string){
    for (var y = 0; y < this.todolist.length; y++){
      if(this.todolist[y].taskDescription == olddis){
        this.todolist[y].dueDate = newDates;
      }
    }

  }

  deleteTask(olddis: string){
    var x;
    for(var i = 0; i < this.todolist.length; i++){
      if(this.todolist[i].taskDescription == olddis){
        x = i;
      }
    }
    this.todolist.splice(x,1);
  }



}
