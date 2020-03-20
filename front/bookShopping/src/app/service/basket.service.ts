import { Injectable, EventEmitter } from '@angular/core';
import { OrderBook } from '../model/orderBook';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  constructor() { }
  orderBooks:OrderBook[]=[];
  productCountChanged:EventEmitter<number>=new EventEmitter();
  totalCountChanged:EventEmitter<number>=new EventEmitter();

  changeProductCount(){
    let productCount:number=0;
    for (let index = 0; index < this.orderBooks.length; index++) {
      const element = this.orderBooks[index];
      productCount+=element.quantity;      
    }
    this.productCountChanged.emit(productCount);
  }

  changeTotalPrice(){
    let total:number=0;
    for (let index = 0; index < this.orderBooks.length; index++) {
      const element = this.orderBooks[index];
      total+=(element.book.price*element.quantity);      
    }
    this.totalCountChanged.emit(total);
  }

}
