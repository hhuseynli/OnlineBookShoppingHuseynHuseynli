import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit() {
  }

  isUserLoggedIn(){
    return this.user.logUser();
  }

}
