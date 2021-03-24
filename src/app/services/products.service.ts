import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }
  
  saveProduct(productObject){
    return this.httpClient.post(this.apiUrl + '/product/saveProduct', productObject);
  }
  getProductById(id){
    return this.httpClient.get(this.apiUrl + '/product/getProductById/' + id);

  }
  getProducts(){
    return this.httpClient.get(this.apiUrl + '/product/listAllPoduct');
  }
  updateProduct(id){
    return this.httpClient.put(this.apiUrl + '/product/updateProduct/' , id);
 }
  
}
