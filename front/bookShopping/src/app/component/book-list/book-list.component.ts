import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';
import { MatDialog } from '@angular/material';
import { AddBookComponent } from '../add-book/add-book.component';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Book[]=[];
  download:string=`${API_URL}/filedownload/files/`;
  popoverTitle:string='Təsdiq';
    popoverMessage:string='Əminsiniz?';
    begin:number=0;
    username:string;

  constructor(private bookService:BookService, private dialog:MatDialog) { }

  ngOnInit() {
    this.username=sessionStorage.getItem("username");
    this.loadBooks();

  }

    onSaveBook(book:Book){
      this.dialog.open(AddBookComponent);
      this.loadBooks();
    }

    onDeleteBook(status:boolean, book:Book){
      let id:number=book.id;
      if(status){
        this.bookService.deleteBook(id).subscribe(
          success=>{
            alert("Kitab uğurla silindi");
            this.loadBooks();
          },error=>{
            alert("Kitab silinə bilməz.");
          }
        );
      }else{
        console.log('failed');
      }
   
    }

    onUpdateBook(book:Book){
      this.bookService.selectedBook=book;
      this.dialog.open(AddBookComponent);

    }

    onScroll(){
      this.begin+=10;
      this.bookService.getBooksByUsername(this.begin,this.username).subscribe(
        resp=>{
          this.books.push(...resp);
        }
      );
    }

    loadBooks(){
      this.begin=0;
      this.bookService.getBooksByUsername(this.begin,this.username).subscribe(
        resp=>{
          this.books=resp;
        }
      );
    }


    
  

}
