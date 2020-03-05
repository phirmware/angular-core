import { Component } from '@angular/core';

@Component({
  selector: 'angular-core-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Core-Course';
  links = [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'customers',icon: 'face', title: 'Customers'},
    {path: 'projects', icon:'work', title: 'Projects'}
  ]
}
