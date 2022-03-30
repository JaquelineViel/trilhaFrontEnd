import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myname = 'Jaqueline Viel';

  myguia = 'George Victor';

  myturma = '10';

  date = new Date('2022-03-30T19:23:10.000')
}



