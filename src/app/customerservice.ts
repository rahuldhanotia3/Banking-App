import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('assets/customers-data.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

    getMenuItems()
    {
        return this.http.get<any>('assets/menu-items.json')
        .toPromise()
        .then(res => <any[]>res.data)
        .then(data => {return data;});
    }
}
