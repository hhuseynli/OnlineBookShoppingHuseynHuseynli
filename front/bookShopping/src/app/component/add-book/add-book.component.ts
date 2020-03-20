import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/service/file.service';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book:Book=new Book();
    constructor(private upload:FileService, private bookS:BookService, private dialog:MatDialog) { }

  ngOnInit() {
    if(this.bookS.selectedBook){
    this.book=this.bookS.selectedBook;
    }
    if(this.dialog.afterAllClosed){
      this.bookS.selectedBook=null;
    }
  }
    

  image:File;
  fileSelected(event){
    let fM:FormData = new FormData();
    let image=event.target.files[0];
    fM.append('file',image);
    this.upload.uploadImage(fM).subscribe(
      resp=>{
        this.book.image=resp.image;
      },error=>{
        alert("Şəkili yadda saxlamaq mümkün olmadı.")
      }
    );
    

  }

  onSaveBook(){
    this.book.username=sessionStorage.getItem("username");
    this.bookS.createBook(this.book).subscribe(
      resp=>{
        alert("Kitab uğurla yadda saxlandı.");
        this.bookS.bookSaved.emit(true);
        this.dialog.closeAll();
      },error=>{
        alert("Kitabı yadda saxlamaq mümkün olmadı.")
      }
    );
    
    
  }



}
