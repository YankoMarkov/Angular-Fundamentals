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
export class CategoryInterceptor implements HttpInterceptor {
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
        let url = String(res.url)
        let index = url.indexOf('category')
        let newUrl = url.substring(index)

        if (url.indexOf('category/create') !== -1) {
          if (res instanceof HttpResponse && res.body.success && res.url.endsWith(newUrl)) {
            this.toastr.success(res.body.message, "Success");
            this.router.navigate(['/category/all'])
          }
        }
        if (url.indexOf('category/delete') !== -1) {
          if (res instanceof HttpResponse && res.body.success && res.url.endsWith(newUrl)) {
            this.toastr.success(res.body.message, "Success");
            this.router.navigate(['/home'])
          }
        }
      }));
  }
}