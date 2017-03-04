const validator = require('email-validator');

export class User {
  email: string;
  password: string;

  isEmailValid() {
    return validator.validate(this.email);
  }
}
