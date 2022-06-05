import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 
  todos:Todo[];
 
  localstore = localStorage.getItem("todos");
  
  constructor() {
    
      if(this.localstore==null)
      {
        this.todos=[];
      }
      else
      {
        this.todos=JSON.parse(this.localstore)
      }
   }
  
  ngOnInit(): void {
  }

  delete(todo:Todo)
  {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1); // 2nd parameter means remove one item only
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  add(todo:Todo)
  {
    if(todo.title!=null && todo.desc!=null)
    {
      this.todos.push(todo)
      localStorage.setItem("todos",JSON.stringify(this.todos))
    }
  }

}
