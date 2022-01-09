import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-drawer',
  templateUrl: './main-drawer.component.html',
  styleUrls: ['./main-drawer.component.css']
})
export class AppMainDrawerComponent implements OnInit {

  @Input() functionEq!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
