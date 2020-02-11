import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersAccountComponent } from './customers-account/customers-account.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
//import { CustomerRouterModule } from './customer'



@NgModule({
  declarations: [CustomersAccountComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
