import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/service/file.service';
import { OrderBook } from 'src/app/model/orderBook';
import { BasketService } from 'src/app/service/basket.service';
import { MatDialog } from '@angular/material';
import { ImageViewComponent } from '../image-view/image-view.component';
import { API_URL } from 'src/app/constants';
import { OrderConfirmComponent } from '../order-confirm/order-confirm.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  books:OrderBook[]=[];
  total:number;
  download:string=`${API_URL}/filedownload/files/`;
  
  constructor(private image:FileService, private basket:BasketService, private dialog:MatDialog, private router:Router) { }

  ngOnInit() {
    this.books=this.basket.orderBooks;
    this.basket.totalCountChanged.subscribe(
      resp=>{
        this.total=resp;
      }
    );
    this.basket.changeTotalPrice();
  }

  viewImage(image){
    this.image.image=image;
    this.dialog.open(ImageViewComponent);
    
  }
  onDelete(count) {
    this.books.splice(count, 1);
    this.basket.changeProductCount();
    this.basket.changeTotalPrice();
  }
  onQuantityChanged(book:OrderBook,count:number){
    if(book.quantity==0){
      this.onDelete(count);
    }else{
      this.basket.changeProductCount();
    this.basket.changeTotalPrice();
    }

  }
  onConfirm(){
      this.dialog.open(OrderConfirmComponent);
  }


}
