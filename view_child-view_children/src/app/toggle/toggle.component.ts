import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() checked = true;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
