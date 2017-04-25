import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos;
    text;
  constructor() { }
     
  ngOnInit() {
    this.todos = [
      {
        text: 'Make a Todo App in Angular'
      },
      {
        text: 'Learn TypeScript'
      },
      {
        text: 'Find 6 New Jobs on Upwork'
      }
    ];
  }

  addTodo(){
    console.log("text", this.text)
    this.todos.push({
      text: this.text
    });
  }

  deleteTodo(todoText){
    for(var i=0; i<this.todos.length; i++){
      if(this.todos[i].text == todoText){
        this.todos.splice(i, 1);
      }
    }
  }

}
