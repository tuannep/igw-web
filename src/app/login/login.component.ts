import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'maker'
  password = '123'
  invalidLogin = false

  constructor(
    public router: Router,
    public loginservice: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  checkLogin() {
    this.loginservice.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['dashboard']);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true;
        });

  }

}
