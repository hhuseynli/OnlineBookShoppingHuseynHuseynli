import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';
import { Book } from '../model/book';
import { SearchModel } from '../model/searchModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  selectedBook:Book;
  bookSaved:EventEmitter<boolean>= new EventEmitter();
  constructor(private http:HttpClient) { }

  public createBook(book:Book){
    return this.http.post<Book>(`${API_URL}/books/book`,book );
  }
  public deleteBook(id:number){
    return this.http.delete(`${API_URL}/books/delete/${id}`);
  }
  public getBooksByUsername(begin:number, username:string){
    return this.http.get<Book[]>(`${API_URL}/books/findUsername/${begin}/${username}`);
  }
  public getBooksPartially(begin:number, username:string){
    return this.http.get<Book[]>(`${API_URL}/books/findRange/${username}/${begin}`);
  }
  public searchPartially(search:SearchModel){
    return this.http.post<Book[]>(`${API_URL}/books/searchRange`,search);
  }

}
