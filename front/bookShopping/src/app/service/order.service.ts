import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from '../model/orderModel';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  createOrder(order:OrderModel){
    return this.http.post<OrderModel>(`${API_URL}/orders/order`, order);
  }
}
