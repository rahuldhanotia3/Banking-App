import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customerservice';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customers: Customer[];

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  items: MenuItem[];
  constructor(private customerService: CustomerService) {}

  ngOnInit() {

    this.customerService.getMenuItems().then(menu => {
      this.items = menu;
    })

    this.customerService.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;
    });

  }//ngOnInit
}
