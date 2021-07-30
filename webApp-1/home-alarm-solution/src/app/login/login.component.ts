import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../services/appConstants';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser: any = {};

  constructor(private _router: Router) { }

  ngOnInit() {
    this.loginUser.name = "s"
    this.loginUser.password = "123"

    let result = localStorage.getItem(AppConstants.LOCAL_STORAGE_USER_KEY);
    if (result)
      this._router.navigate(['/dashboard']);
  }

  login() {
    localStorage.setItem(AppConstants.LOCAL_STORAGE_USER_KEY, JSON.stringify(this.loginUser));
    this._router.navigate(['/dashboard']);
  }

}
