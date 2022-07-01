import { Component } from '@angular/core';
import {NgStyleClass} from "./NgStyleClass";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular';
  arr = [['a', 's'], ['b', 'c']];
  num = 0;
  showMe: boolean;
  colorInput: string;
  dateValue = '2022-07-01';
  textValue = 'Hello WORLD';
  ngStyleClass = new NgStyleClass();
}
