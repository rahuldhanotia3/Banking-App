import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private primengConfig: PrimeNGConfig,private route : Router) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  email: string = '';
  password: string = '';
  emailInvalid: boolean = true;
  showPassword: boolean = false;
  errorMsg : string = "";

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailInvalid = !emailRegex.test(this.email);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  btnSubmit()
  {
    let errmsg = (document.getElementById('errorMsg') as HTMLElement);
    if(this.email === "Admin@gmail.com" && this.password === "123")
    {
      this.route.navigate(['/dashboard']);
    }
    else
    {
      this.emailInvalid = true;
      this.errorMsg = "Incorrect Email Or Password";
      //alert(this.errorMsg);
    }
  }
}
