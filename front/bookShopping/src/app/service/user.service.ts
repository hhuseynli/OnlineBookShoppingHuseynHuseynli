import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[];

  constructor(private http:HttpClient) {}

  public logUser(): boolean {
    let result:boolean= false;
    if(sessionStorage.getItem("authorization")){
      result=  true;
    }

    return result;
  }

  public createUser(user:User){
    return this.http.post<User>(`${API_URL}/users`,user);
  }

  public getUsers(){
    this.http.get<User[]>(`${API_URL}/users`).subscribe(
      resp=>{
        this.users=resp;
      }
    );
  }
}
