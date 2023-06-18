import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { CustomerListComponent } from './Components/customer-list/customer-list.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
