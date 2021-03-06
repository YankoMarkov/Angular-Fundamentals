import {
  HttpResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'
import { tap } from 'rxjs/operators'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${currentUser.token}`
        }
      })
    }

    return next.handle(request)
      .pipe(tap((res: any) => {
        if (res instanceof HttpResponse && res.body.token) {
          this.saveToken(res.body);
          this.toastr.success(res.body.message, "Success")
          this.router.navigate(['/home'])
        }

        if (res instanceof HttpResponse && res.body.success && res.url.endsWith('signup')) {
          this.toastr.success(res.body.message, "Success");
          this.router.navigate(['/signin'])
        }
      }));
  }

  private saveToken(data) {
    localStorage.setItem('currentUser', JSON.stringify({
      "username": data.user.name,
      "token": data.token,
      "isAdmin": data.user.isAdmin
    }));
  }
}