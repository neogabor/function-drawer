import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  functionValue :string = '';
  @ViewChild('functionInput') inputRef!: ElementRef;
  constructor() {
  }

  onAddGraph() {
    this.functionValue = this.inputRef.nativeElement.value;
  }
}
