import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {AlertController} from '@ionic/angular';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonNav, IonItem, IonLabel, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { trash,trashSharp, arrowForwardSharp, addSharp } from 'ionicons/icons';

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

  async deleteTask(index:number) {
    this.tasks.splice(index,1);

  }

  async updateTask(index:number) {
    const alert = await this.alertCtrl.create({
      header: 'Update Task',
      message: 'Type in your new task title to update',
      inputs: [{
        name: 'editTitle',
        placeholder: 'New task title',
        type: 'text'
      }],
      buttons: [
        {text:'Cancel',
      role:'cancel'},
        {text:'Update',
      handler: (data) => {this.tasks[index].title = data.editTitle;}}]
    });
    await alert.present();    
  }

  async addTask() {
    const alert = await this.alertCtrl.create({
      header: 'Add Task',
      inputs: [{
        name: 'title',
        placeholder: 'Task title',
        type: 'text'
      }],
      buttons: [
        {text:'Cancel',
      role:'cancel'},
        {text:'Add',
      handler: (data) => {this.tasks.push(data)}}]
    });
    await alert.present();
  }

  constructor(public alertCtrl: AlertController) {}

  ngOnInit() {    
  }
}
