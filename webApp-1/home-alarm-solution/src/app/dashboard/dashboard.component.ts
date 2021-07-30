import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../services/appConstants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: any = {};

  constructor(private _router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(AppConstants.LOCAL_STORAGE_USER_KEY));

    console.log(this.user)
    if (!this.user)
      this._router.navigate(['/login']);

  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);

  }

}
