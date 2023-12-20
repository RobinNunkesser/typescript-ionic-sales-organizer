import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Task } from './../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {  

  tasks : Task[] = [ ];

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
      handler: (data) => {this.dataService.addTask({
        title: data.title,
        text: '',
        teammember: '',
        customer: ''
      })}}]
    });
    await alert.present();
  }

  constructor(private dataService: DataService, public alertCtrl: AlertController) {
    this.dataService.getTasks().subscribe(data => {this.tasks = data})
  }

  ngOnInit() {    
  }
}
