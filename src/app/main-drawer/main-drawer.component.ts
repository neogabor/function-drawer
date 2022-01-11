import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main-drawer',
  templateUrl: './main-drawer.component.html',
  styleUrls: ['./main-drawer.component.css']
})
export class AppMainDrawerComponent implements OnInit {

  @Input() functionEq!: string;
  @ViewChild('canvasFunc') canvas!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    const canv = this.canvas.nativeElement.getContext('2d');
    if (!canv) {
      throw new Error('No canvas found');
    }
    this.ctx = canv;
    this.drawCoordinateSys();
  }
  drawCoordinateSys() {
    this.ctx.beginPath();
    this.ctx.moveTo(250,500);
    this.ctx.lineTo(250,0);
    this.ctx.moveTo(0,250);
    this.ctx.lineTo(500,250);
    this.ctx.stroke();
  }

}
