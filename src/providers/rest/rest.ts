import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product} from "../../model/product";
import {Observable} from "rxjs";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  baseUrl:string = "http://localhost:3000";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  /* import {Observable} from "rxjs"; 로 해야 한다.*/
  public getProducts():Observable<Product[]> {
    return this.http.get(this.baseUrl+"/products")
      .map((response:Product[]) => {
        return response.map(product => {return new Product(product)})
      }).catch((err) => {
        return Observable.empty<Product[]>();
      });
  }

  public createProduct(product:Product): Observable<Product>{
    return this.http.post(this.baseUrl + "/products", product)
      .map(response => {
        return new Product(response)
      }).catch((err)=>{
        console.error(err);
        return Observable.empty<Product>();
      })
  }

  public updateProduct(product:Product): Observable<Product>{
    return this.http.put(this.baseUrl + "/products/"+product.id, product)
      .map(resp=>{
        return new Product(resp);
      }).catch((err)=>{
        console.error(err);
        return Observable.empty<Product>();
      });
  }

  public deleteProductById(productId:number): Observable<Product>{
    return this.http.delete(this.baseUrl + "/products/" +  productId)
      .map(resp=>{
        return new Product(resp)
      }).catch((err)=>{
        console.error(err);
        return Observable.empty<Product>();
      })
  }




}
