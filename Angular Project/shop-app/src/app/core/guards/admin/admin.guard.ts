import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router, private toastr: ToastrService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isAdmin()) {
      return true;
    }

    this.router.navigate(['/signin']);
    this.toastr.error("You are not Admin!", "Warning")
    return false;
  }
}
