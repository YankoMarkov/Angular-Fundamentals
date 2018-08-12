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
        if (res instanceof HttpResponse && res.body.success && res.url.endsWith('product/create')) {
          this.toastr.success(res.body.message, "Success");
          this.router.navigate(['/product/all'])
        }
        if (res instanceof HttpResponse && res.body.success && res.url.endsWith('product/delete/:id')) {
          this.toastr.success(res.body.message, "Success");
          this.router.navigate(['/product/all'])
        }
        if (res instanceof HttpResponse && res.body.success && res.url.endsWith('product/deleteProduct/:id')) {
          this.toastr.success(res.body.message, "Success");
          this.router.navigate(['/product/all'])
        }
        if (res instanceof HttpResponse && res.body.success && res.url.endsWith('product/edit/:id')) {
          this.toastr.success(res.body.message, "Success");
          this.router.navigate(['/product/all'])
        }
        if (res instanceof HttpResponse && res.body.success && res.url.endsWith('product/buy/:id')) {
          this.toastr.success(res.body.message, "Success");
          this.router.navigate(['/product/mine'])
        }
      }));
  }
}