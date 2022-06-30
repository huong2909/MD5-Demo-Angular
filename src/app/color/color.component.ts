import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  constructor() { }

  color() {
    document.getElementById('color').style.background = 'red';
    document.getElementById('color1').style.background = 'green';
    document.getElementById('color2').style.background = 'blue';
  }
  ngOnInit() {
  }

}
