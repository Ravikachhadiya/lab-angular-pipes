import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  date: number = Date.now();
  num: number = 100;
  str: string = "Angular 8.0 is a Component Based Framework"
}
