import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userP:User= new User();
  letterPattern='^[a-zA-Z \-\']+';
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  constructor(private user:UserService) { }

  ngOnInit() {
  }
  onNewAccount(){
   let userAlreadyExists:boolean=false;
   this.user.getUsers();
   for (let index = 0; index < this.user.users.length; index++) {
     const element = this.user.users[index];
     if(element.username==this.userP.username){
       userAlreadyExists=true;
       break;
     }
     
   }
   if(userAlreadyExists){
     alert("Bu istifadəçi adı artıq var. Başqa istifadəçi adı seçin")
   }else{
    this.user.createUser(this.userP).subscribe(
      resp=>{
        alert("Hesab uğurla yaradıldı.");
      }
    );
   }
   
  }

}
