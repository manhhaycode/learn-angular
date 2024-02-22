import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular';
    showTodoView = false;

    toggleTodoView() {
        this.showTodoView = !this.showTodoView;
        console.log(this.showTodoView);
    }
}
