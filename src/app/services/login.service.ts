import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  response = 404;
  constructor(private httpClient : HttpClient) { }
  getUser(userdata){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application-json')
    const signUrl = 'http://127.0.0.1:5000/user/login?email='+userdata.email+'&password='+userdata.password;
    return this.httpClient.get(signUrl,{headers: httpHeaders}).pipe(catchError(this.handleError))
  }
  
  private handleError(errorResponse : HttpErrorResponse){
    this.response = errorResponse.status
    if(errorResponse.status !== 200 ){
      alert("Wrong username or password")
    }
    return throwError("There is a problem with server");;
  }
}
