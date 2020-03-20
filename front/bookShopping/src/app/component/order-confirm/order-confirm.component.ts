import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/model/orderModel';
import { BasketService } from 'src/app/service/basket.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {
  order:OrderModel=new OrderModel();
  total:number=0;
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phonePattern="^((\\+994-?)|0)?[0-9]{9}$";
  letterPattern="^[a-zA-Z \-\']+";

  constructor(private basketService:BasketService, private service:OrderService) { }

  ngOnInit() {
    this.basketService.totalCountChanged.subscribe(
      resp=>{
        this.total=resp;
      }
    );
  }

  onConfirmOrder(){
    this.order.username=sessionStorage.getItem("username");
    this.order.orderBooks=this.basketService.orderBooks;
    this.basketService.changeTotalPrice();
    this.order.total=this.total;
    this.service.createOrder(this.order).subscribe(
      success=>{
        this.basketService.orderBooks=[];
        this.basketService.changeProductCount();
      }
      ,error=>{
        alert("Şifariş etmək mümkün olmadı. ");
      }
    );

  }

}
