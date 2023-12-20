import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'All Tasks', url: '/list', icon: 'albums' },
    { title: 'Customers', url: '/customers', icon: 'globe' },
    { title: 'Team Members', url: '/team', icon: 'people' },
  ]; 
  constructor() {}
}
