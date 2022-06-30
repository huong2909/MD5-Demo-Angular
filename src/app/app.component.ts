import { Component } from '@angular/core';

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
}
