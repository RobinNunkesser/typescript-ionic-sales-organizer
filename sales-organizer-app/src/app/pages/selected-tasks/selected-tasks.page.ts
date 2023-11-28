import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-selected-tasks',
  templateUrl: './selected-tasks.page.html',
  styleUrls: ['./selected-tasks.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SelectedTasksPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
