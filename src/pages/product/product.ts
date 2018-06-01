import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../model/product";
import {Observable} from "rxjs";
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  productsObservable:Observable<Product[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private rest:RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.productsObservable = this.rest.getProducts();
  }

  navToDetail(product:Product){
    this.navCtrl.push("ProductDetailPage", {"product": product});
  }

  createProduct(){
    this.navCtrl.push("ProductDetailPage", {"product": {}});
  }

}
