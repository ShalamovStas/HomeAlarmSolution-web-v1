import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AppConstants } from "./appConstants";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        let result = localStorage.getItem(AppConstants.LOCAL_STORAGE_USER_KEY);

        if (result)
            return true;
        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    }
}