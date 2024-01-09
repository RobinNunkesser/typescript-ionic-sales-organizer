import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { sortBy,filter } from 'lodash';

@Component({
  selector: 'app-selected-tasks',
  templateUrl: './selected-tasks.page.html',
  styleUrls: ['./selected-tasks.page.scss'],
})
export class SelectedTasksPage implements OnInit {

  tasks: any;
  selection: any;

  constructor(private dataService: DataService, private activitatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selection = this.activitatedRoute.snapshot.params;
    let category = this.selection.category;
    let criteria = this.selection.criteria;
    this.dataService.getTasks().subscribe(data => {
      this.tasks = sortBy(data,'title');
      this.tasks = filter(data,[category as string,criteria as string]);
    }) 
  }

}
