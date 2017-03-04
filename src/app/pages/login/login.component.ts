import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user/user';
import { UserService } from '../../shared/user/user.service';
import { Page } from 'ui/page';
import { Color } from 'color';
import { View } from 'ui/core/view';

@Component({
  selector: 'my-app',
  providers: [UserService],
  templateUrl: 'pages/login/login.html',
  styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
})
export class LoginComponent implements OnInit {

  user: User;
  isLoggingIn = true;
  @ViewChild('container') container: ElementRef;

  constructor(private router: Router, private userService: UserService, private page: Page) {

  }

  ngOnInit() {
    this.user = new User();
    this.user.email = 'wellwind@test.com';

    this.page.actionBarHidden = true;
    this.page.backgroundImage = 'res://bg_login';
  }

  submit() {
    if (!this.user.isEmailValid()) {
      alert('Enter a valid email address.');
      return;
    }

    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.router.navigate(['/list']);
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
    const containerElement = <View>this.container.nativeElement;
    containerElement.animate({
      backgroundColor: this.isLoggingIn ? new Color('white') : new Color('#ADD8E6'),
      duration: 200
    });
  }
}
