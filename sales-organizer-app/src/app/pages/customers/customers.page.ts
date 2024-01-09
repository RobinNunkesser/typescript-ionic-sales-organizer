import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Customer } from './../../services/data.service';
import { sortBy } from 'lodash';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  customers : Customer[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getCustomers().subscribe(data => {this.customers = sortBy(data,'name')})
   }

  ngOnInit() {
  }

}
