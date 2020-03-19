import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/constants';
import { BookService } from 'src/app/service/book.service';
import { Book } from 'src/app/model/book';
import { FileService } from 'src/app/service/file.service';
import { MatDialog } from '@angular/material';
import { ImageViewComponent } from '../image-view/image-view.component';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

download:string=`${API_URL}/filedownload/files/`;
username:string=" ";
begin:number=0;
books:Book[]=[];
  constructor(private bookService:BookService, private file:FileService, private dialog:MatDialog) { }

  ngOnInit() {
    if(sessionStorage.getItem("username")){
      this.username=sessionStorage.getItem("username");
    }
    this.loadBooks();

  }

  loadBooks(){
    this.begin=0;
    this.bookService.getBooksPartially(this.begin,this.username).subscribe(
      resp=>{
        this.books=resp;
      }
    );

  }
  onScroll(){
    this.begin+=10;
    this.bookService.getBooksPartially(this.begin,this.username).subscribe(
      resp=>{
        this.books.push(...resp);
      }
    );

  }

  viewImage(image){
    this.file.image=image;
    this.dialog.open(ImageViewComponent);
  }


}
