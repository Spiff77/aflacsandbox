import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqHeader = request.clone({
      setHeaders : {
        Authorization: 'Baerer BLABLABLABLABLABLAB'
      }
    });
    console.log(reqHeader.headers.get('Authorization'));
    return next.handle(reqHeader);
  }
}
