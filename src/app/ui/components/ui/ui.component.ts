import { Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent {
  public close: boolean = false;

  constructor() {}

  public toggle(): void {
    this.close = !this.close;
    console.log(this.close);
  }
}
