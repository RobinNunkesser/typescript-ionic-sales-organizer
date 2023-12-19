import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonNav, IonItem, IonLabel, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,IonButton,IonNav,IonItem,IonLabel,IonFab, IonFabButton, IonIcon,CommonModule],
})
export class ListPage implements OnInit {  

  tasks = [{number:1,title: 'Meeting with Susan'},
  {number:2,title: 'Trip to Berlin'},
  {number:3,title: 'Board Meeting'}];

  addTask() {
    console.log('Add task')    
  }

  constructor() {}

  ngOnInit() {    
  }
}
