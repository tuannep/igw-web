import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShown:boolean=false;
  constructor( public router: Router
  ) {

  }

  ngOnInit(): void {
  }
  doLogout(){
    console.log("Logout");
    //this.loginservice.logout();
    //this.loginservice.logOut();
    this.router.navigate(['dashboard'])
  }
}
