import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guatajaus';
  parentSubject: Subject<string> = new Subject();

  constructor() {

  }

 cardAnimation(value) {
    this.parentSubject.next(value);
  }

}
