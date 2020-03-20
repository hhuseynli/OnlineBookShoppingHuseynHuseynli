import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { OrderModel } from 'src/app/model/orderModel';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders:OrderModel[]=[];
  begin:number=0;
  username:string="";
  constructor(private order:OrderService) { }

  ngOnInit() {
    this.username=sessionStorage.getItem("username");
    this.loadOrders();
  }

  loadOrders(){
    this.order.getOrders(this.username,this.begin).subscribe(
      resp=>{
        this.orders=resp;
      }
    );
  }
  onScroll(){
    this.begin+=10;
    this.order.getOrders(this.username,this.begin).subscribe(
      resp=>{
        this.orders.push(...resp);
      }
    )
  }




}
