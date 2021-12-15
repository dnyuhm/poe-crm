import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
  ],
  imports: [CommonModule, OrdersRoutingModule, IconsModule],
})
export class OrdersModule {}
