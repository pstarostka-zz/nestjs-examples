import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vat-mvp-dumb-component',
  templateUrl: './dumb-component.component.html',
  styleUrls: ['./dumb-component.component.css'],
})
export class DumbComponentComponent {
  @Input() public title: string;
  @Output() public titleChanged = new EventEmitter<string>();
}
