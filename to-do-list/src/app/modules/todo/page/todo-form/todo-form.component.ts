import { Component } from '@angular/core';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
    value: string = '';
    todos: string[] = [];

    addTodo() {
        this.todos.push(this.value);
        this.value = '';
    }

    deleteTodo(index: number) {
        this.todos.splice(index, 1);
        console.log(this.todos);
    }
}
