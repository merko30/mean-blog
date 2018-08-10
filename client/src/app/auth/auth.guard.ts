import { Observable } from 'rxjs/Observable';
import { Router, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    isAuthenticated: Boolean

    constructor(private authService: AuthService, private router: Router) {
        this.isAuthenticated = this.authService.isAuthenticated();
    }

    canActivate() {
        if (this.isAuthenticated) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}