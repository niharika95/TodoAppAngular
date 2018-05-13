import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private todoDataService: TodoDataService){

  }

  toggleTodoComplete(todo){
  	this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
  	this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(){
  	return this.todoDataService.getAllTodos();
  }
}
