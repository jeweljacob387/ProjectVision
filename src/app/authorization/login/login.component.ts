import { Component, AfterViewInit, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit, OnInit {

  public loginForm: FormGroup;
  constructor(
    private loginService: LoginService
  ) { }


  ngAfterViewInit() {
    this.loginService.googleInit();
    const user = localStorage[`${environment.localStorageKeyPrefix}.user`];
    if (user) {
      alert(user);
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email' : new FormControl('', [Validators.email, Validators.required])
    })
  } 

  login () {
    if (this.loginForm.valid) {
      localStorage[`${environment.localStorageKeyPrefix}.user`] = this.email.value;
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
}
