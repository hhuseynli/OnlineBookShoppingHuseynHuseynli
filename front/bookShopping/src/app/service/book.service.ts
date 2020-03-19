import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  selectedBook:Book;
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

}
