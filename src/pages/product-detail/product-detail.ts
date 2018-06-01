import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Product} from "../../model/product";
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  product:Product;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private rest:RestProvider,private toastCtrl: ToastController) {
    this.product =  new Product(this.navParams.get('product'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  saveProduct(product:Product){
    if (product.id){	//수정
      this.rest.updateProduct(product).subscribe((product)=>{
        this.product = product;
        this.showSuccessMessage("Product " + product.name + " updated");
        this.navCtrl.setRoot('ProductPage');
      });
    }else{  		//등록
      this.rest.createProduct(product).subscribe((product)=>{
        this.product = product;
        this.showSuccessMessage("Product "+ product.id + " - " + product.name + " created");
        this.navCtrl.setRoot('ProductPage');
      });
    }
  }//saveProduct

  deleteProduct(productId:number){
    this.rest.deleteProductById(productId).subscribe((product)=>{
      console.log(product)
      this.showSuccessMessage("Product Id "+ productId + " has been removed!");
      this.navCtrl.setRoot('ProductPage');
    })
  }//deleteProduct

  showSuccessMessage(message:string){
    this.toastCtrl.create({
      message: message, showCloseButton: true,
      duration:3000, position:'middle'
    }).present();
  }//showSuccessMessage
}
