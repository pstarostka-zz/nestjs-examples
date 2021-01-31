import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'vat-mvp-smart-container',
  templateUrl: './smart-container.component.html',
  styleUrls: ['./smart-container.component.css'],
})
export class SmartContainerComponent {
  public countries$ = of(['one', 'two']); //apiservice.get()
  constructor() {
    //
  }
}
