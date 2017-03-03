import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user/user';
import { UserService } from '../../shared/user/user.service';
import { Page } from 'ui/page';

@Component({
  selector: 'my-app',
  providers: [UserService],
  templateUrl: 'pages/login/login.html',
  styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
})
export class LoginComponent implements OnInit {

  user: User;
  isLoggingIn = true;

  constructor(private router: Router, private userService: UserService, private page: Page) {

  }

  ngOnInit() {
    this.user = new User();
    this.user.email = 'wellwind@test.com';

    this.page.actionBarHidden = true;
    this.page.backgroundImage = 'res://bg_login';
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.router.navigate(['/list'])
  }

  signUp() {
    this.userService.register(this.user)
      .subscribe(
      () => {
        alert('Your account was successfully created.');
        this.toggleDisplay();
      },
      () => alert('Unfortunately we were unable to create your account.')
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
