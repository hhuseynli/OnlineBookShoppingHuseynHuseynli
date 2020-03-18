import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

  public logUser(): boolean {
    let result:boolean= false;
    if(sessionStorage.getItem("authorization")){
      result=  true;
    }

    return result;
  }

  public createUser(user:User){
    return this.http.post<User>(`${API_URL}/users`,user).subscribe(
      resp=>{
        alert("Hesab uğurla yaradıldı.");
      },
      error=>{
        alert("Bu istifadəçi adı artıq qeyd olunub.");
      }
    );
  }
}
