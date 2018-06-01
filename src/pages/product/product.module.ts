import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProductPage} from './product';
import {OrderModule} from "ngx-order-pipe";

@NgModule({
  declarations: [
    ProductPage,
  ],
  imports: [
    OrderModule,
    IonicPageModule.forChild(ProductPage),
  ],
  providers : [

  ]
})
export class ProductPageModule {}
