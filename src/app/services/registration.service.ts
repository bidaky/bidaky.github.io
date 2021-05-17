import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private httpClient : HttpClient) { }

  postUser(userdata){
    return this.httpClient.post('http://127.0.0.1:5000/user', userdata).pipe(catchError(this.handleError))
  }
  private handleError(errorResponse : HttpErrorResponse){
    if(errorResponse.status === 200 || errorResponse.status === 201 ){
      alert("User was created succesfully.")
    }
    else if (errorResponse.status === 403 ){
      alert("User with this email already exists!")
      console.error('Client side error : ', errorResponse.error.message);
    }
    else if (errorResponse.status === 405){
      alert("User was not created. There is a problem with server.Check data and try again")
      console.error('Server side error : ', errorResponse);
    }
    else{
      alert("Unknown problem.User was not created.")
    }
    return throwError("There is a problem with server");

  }

}



