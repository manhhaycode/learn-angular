import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';
  checked = true;
  showLast = true;
  // @ViewChild via template reference variable
  @ViewChild('toggleCompChild', { static: true }) toggleCompChild: ToggleComponent | undefined;

  @ViewChildren(ToggleComponent) toogleCompList: QueryList<ToggleComponent> | undefined;

  ngOnInit() {
    // if @ViewChild has a static value, it will be available in ngOnInit and ngAfterViewInit
    console.log('NgOnInit toggleCompChild', this.toggleCompChild);
  }

  ngAfterViewInit() {
    // if @ViewChild has a dynamic value, it will be available in ngAfterViewInit
    console.log('ngAfterViewInit toggleCompChild', this.toggleCompChild);
    this.toogleCompList?.changes.subscribe(console.log);
  }

  toggleInside() {
    this.toggleCompChild?.toggle();
  }
}
