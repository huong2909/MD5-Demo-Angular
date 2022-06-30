import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }

  cong() {
    // @ts-ignore
    const st1 = +document.getElementById('input1').value;
    // @ts-ignore
    const st2 = +document.getElementById('input2').value;
    alert(st1 + st2);
  }
  tru() {
    // @ts-ignore
    const st1 = +document.getElementById('input1').value;
    // @ts-ignore
    const st2 = +document.getElementById('input2').value;
    alert(st1 - st2);
  }
  nhan() {
    // @ts-ignore
    const st1 = +document.getElementById('input1').value;
    // @ts-ignore
    const st2 = +document.getElementById('input2').value;
    alert(st1 * st2);
  }
  chia() {
    // @ts-ignore
    const st1 = +document.getElementById('input1').value;
    // @ts-ignore
    const st2 = +document.getElementById('input2').value;
    alert(st1 / st2);
  }

  ngOnInit() {
  }

}
