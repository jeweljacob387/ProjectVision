import { Component, AfterViewInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  constructor(
    private loginService: LoginService
  ) { }


  ngAfterViewInit() {
    this.loginService.googleInit();
  }
}
