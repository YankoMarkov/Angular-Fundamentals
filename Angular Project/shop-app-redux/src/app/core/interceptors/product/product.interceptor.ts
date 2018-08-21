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
export class ProductInterceptor implements HttpInterceptor {
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
        let index = url.indexOf('product')
        let newUrl = url.substring(index)

        if (url.indexOf('product/create') !== -1) {
          if (res instanceof HttpResponse && res.body.success && res.url.endsWith(newUrl)) {
            this.toastr.success(res.body.message, "Success");
            this.router.navigate(['/product/all'])
          }
        }
        if (url.indexOf('product/delete') !== -1) {
          if (res instanceof HttpResponse && res.body.success && res.url.endsWith(newUrl)) {
            this.toastr.success(res.body.message, "Success");
            this.router.navigate(['/product/all'])
          }
        }
        if (url.indexOf('product/deleteProduct') !== -1) {
          if (res instanceof HttpResponse && res.body.success && res.url.endsWith(newUrl)) {
            this.toastr.success(res.body.message, "Success");
            this.router.navigate(['/product/mine'])
          }
        }
        if (url.indexOf('product/edit') !== -1) {
          if (res instanceof HttpResponse && res.body.success && res.url.endsWith(newUrl)) {
            this.toastr.success(res.body.message, "Success");
            this.router.navigate(['/product/all'])
          }
        }
        if (url.indexOf('product/buy') !== -1) {
          if (res instanceof HttpResponse && res.body.success && res.url.endsWith(newUrl)) {
            this.toastr.success(res.body.message, "Success");
            this.router.navigate(['/product/mine'])
          }
        }
        if (url.indexOf('product/details') !== -1) {
          if (res instanceof HttpResponse && res.body.success && res.url.endsWith(newUrl)) {
            this.toastr.success(res.body.message, "Success");
            this.router.navigate(['/product/details'])
          }
        }
      }));
  }
}