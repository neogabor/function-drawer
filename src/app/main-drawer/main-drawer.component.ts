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
    let numberPattern = /\d+\.?\d*/;
    let steepness = Number(this.functionEq.match(numberPattern));console.log(steepness);
    let power = 1;
    if(this.functionEq.includes('^')) {
      power = Number(this.functionEq.substring(steepness.toString().length + 1).match(numberPattern));
    }
    let offset = 0;
    if(this.functionEq.indexOf('^') + 2 != this.functionEq.length) {
      if (this.functionEq.includes('^')) {
        offset = Number(this.functionEq.substring(steepness.toString().length + power.toString().length + 2).match(numberPattern));
      } else {
        offset = Number(this.functionEq.substring(steepness.toString().length).match(numberPattern));
      }
    }
    this.ctx.moveTo(halfLength,halfLength);
    for(let i=1; i<=250; i++) {
      this.ctx.lineTo(halfLength + i, halfLength - offset - steepness * Math.pow(i, power));
    }
    this.ctx.moveTo(halfLength,halfLength);
    for(let i=1; i<=250; i++) {
     this.ctx.lineTo(halfLength - i, halfLength - offset + steepness * Math.pow(i, power));
    }
  
    this.ctx.stroke();
  }
}
