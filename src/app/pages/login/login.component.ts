import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user/user';
import { UserService } from '../../shared/user/user.service';
import { Page } from 'ui/page';
import { Color } from 'color';
import { View } from 'ui/core/view';
import { setHintColor } from '../../utils/hint-util';
import { TextField } from 'ui/text-field';

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
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;

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
    this.setTextFieldColors();
    const containerElement = <View>this.container.nativeElement;
    containerElement.animate({
      backgroundColor: this.isLoggingIn ? new Color('white') : new Color('#ADD8E6'),
      duration: 200
    });
  }
  setTextFieldColors() {
    const emailTextField = <TextField>this.email.nativeElement;
    const passwordTextField = <TextField>this.password.nativeElement;

    const mainTextColor = new Color(this.isLoggingIn ? 'black' : '#C4AFB4');
    emailTextField.color = mainTextColor;
    passwordTextField.color = mainTextColor;

    const hintColor = new Color(this.isLoggingIn ? '#ACA6A7' : '#C4AFB4');
    setHintColor({ view: emailTextField, color: hintColor });
    setHintColor({ view: passwordTextField, color: hintColor });
  }
}
