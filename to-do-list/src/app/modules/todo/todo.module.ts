import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './page/todo/todo.component';
import { TodoItemComponent } from './page/todo-item/todo-item.component';
import { TodoFormComponent } from './page/todo-form/todo-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [TodoComponent, TodoItemComponent, TodoFormComponent],
    imports: [CommonModule, SharedModule],
    exports: [TodoComponent],
})
export class TodoModule {}
