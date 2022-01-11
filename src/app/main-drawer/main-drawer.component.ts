import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main-drawer',
  templateUrl: './main-drawer.component.html',
  styleUrls: ['./main-drawer.component.css']
})
export class AppMainDrawerComponent implements OnInit, AfterViewInit, OnChanges {

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

  ngOnChanges(changes: SimpleChanges): void {
    if(this.functionEq) {
      this.ctx.clearRect(0,0,this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.drawCoordinateSys();
      if(this.functionEq.indexOf('x')==-1) {
        console.error('Function must contain "x" variable');
      }
      this.drawFunction();
    };
  }

  drawFunction() {
    const halfLength = 250;
    const steepness = Number(this.functionEq.substring(0, this.functionEq.indexOf('x')));
    this.ctx.moveTo(halfLength + halfLength/steepness,0);
    this.ctx.lineTo(halfLength - halfLength/steepness, 500);
    this.ctx.stroke();
  }
}
