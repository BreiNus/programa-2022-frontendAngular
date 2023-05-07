import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';
import { TokenService } from '../token.service';
import { ToastrService } from 'ngx-toastr';
import { JwtDTO } from 'src/app/models/jwt-dto';
import { AuthService } from '../auth.service';

const AUTHORIZATION = 'Authorization';

@Injectable({
  providedIn: 'root',
})
export class UsuarioInterceptorService implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private authService: AuthService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {


    if (!this.tokenService.isLogged()) {
      return next.handle(req);

    }
    //variale intReq = request interceptado
    let intReq = req;
    const token = this.tokenService.getToken();

    intReq = this.addToken(req, token);

    //la request ya fue interceptada
    //si el toquen expira se va a actualizar, eso tambien viene desde el back refreshToken
    return next.handle(intReq).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        const dto: JwtDTO = new JwtDTO(this.tokenService.getToken());
        //la funcion concatMap() sirve en este caso para que los observables se ejecuten en orden
        return this.authService.refresh(dto).pipe(concatMap((data: any) => {
          console.log('refreshing....');
          this.tokenService.setToken(data.token);
          intReq = this.addToken(req, data.token);
          return next.handle(intReq);
        }));
      } else if (err.status === 403) {
        this.tokenService.logOut();
        return throwError(err);
      } else {
        return throwError(err);
      }
    }));
  }

  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ headers: req.headers.set(AUTHORIZATION, 'Bearer ' + token) });
  }
}


export const interceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: UsuarioInterceptorService,
    multi: true,
  },
];
