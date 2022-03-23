import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import {  User } from '../../_models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShown:boolean=false;
  loginUser: User;
  loginUserName: String;
  constructor(
    public router: Router,
    public loginservice: AuthenticationService) {
    this.loginUser = JSON.parse(localStorage.getItem('currentUser'));
    this.loginUserName = this.loginUser.username;
  }

  ngOnInit(): void {
  }

  doLogout(): any {
    console.log("Logout");
    this.loginservice.logOut();
    this.router.navigate(['login']);
  }

}
