import { Component, OnInit } from "@angular/core";
import { User } from "./shared/user/user";

@Component({
  selector: "my-app",
  templateUrl: 'pages/login/login.html',
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  
  ngOnInit(){
    this.user = new User();
    this.user.email = 'wellwind@test.com';
  }

  submit() {
    alert("Your email: " + this.user.email);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
