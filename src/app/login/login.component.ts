import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

 
import { AuthLoginInfo } from 'app/Auth/login-info';
import { AuthService } from 'app/Auth/auth.service';
import { TokenStorageService } from 'app/Auth/token-storage.service';
import { Router } from '@angular/router';
import { routerTransition } from 'app/router.animation';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [routerTransition()],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,public router:Router) { }

  ngOnInit() {
 /*   if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }*/
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
       this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        alert('identifiant ou mot de passe incorrect !!!')
      }
    );
  }

  reloadPage() {
    this.router.navigate(['Accueil'])
  }
}
