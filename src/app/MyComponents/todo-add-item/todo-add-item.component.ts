import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.css']
})
export class TodoAddItemComponent implements OnInit {
  
  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter()
  title:string
  desc:string
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    const todo={
          sno:100,
          title:this.title,
          desc:this.desc,
          active:true
        }
        this.todoAdd.emit(todo)
  }

}
