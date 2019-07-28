import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  public auth2: any;
  
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '552265379945-45hcuq20duchpe7gltrrss6m732v8b4s.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('google-signIn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        // console.log('Token || ' + googleUser.getAuthResponse().id_token);
        // console.log('ID: ' + profile.getId());
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail());
        localStorage[`${environment.localStorageKeyPrefix}.user`] = profile.getEmail();
        localStorage[`${environment.localStorageKeyPrefix}.googleUserToken`] = googleUser.getAuthResponse().id_token;
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
}
