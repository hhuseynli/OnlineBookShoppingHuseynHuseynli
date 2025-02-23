import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/constants';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User= new User();


  constructor(private http:HttpClient, private router:Router, private userService:UserService, private matDialog:MatDialog) { }

  ngOnInit() {
  }
  onLogin() {
    let HeaderString = 'Basic ' + window.btoa(this.user.username + ':' + this.user.password);
    let HeaderObject = new HttpHeaders(
      {
        Authorization: HeaderString
      }
    );

    this.http.get<boolean>(`${API_URL}/validations`, {
      headers: HeaderObject
    }).subscribe(
      success => {
        sessionStorage.setItem("username",this.user.username);
        sessionStorage.setItem("authorization", HeaderString);
        this.router.navigate(["books"]);
      },error=>{
        alert('Məlumatlar yanlışdır.');
      }


    );
  }

  

isUserLoggedIn():boolean{
  return this.userService.logUser();
}

onSignUp(){
  this.matDialog.open(SignupComponent);  
}

}
