import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  green = 255;
  red = 255;
  blue = 255;
  changeColor = '';
  constructor() { }


  ngOnInit() {
  }

}
