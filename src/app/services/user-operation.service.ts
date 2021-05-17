import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserOperationService {

  constructor(private httpClient : HttpClient) { }
  
  updateUser(updateData, email){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application-json')
    const signUrl = 'http://127.0.0.1:5000/user/'+ email;
    return this.httpClient.put(signUrl,updateData,{headers: httpHeaders}).pipe(catchError(this.handleError))
  }

  private handleError(errorResponse : HttpErrorResponse){
    if(errorResponse.status === 200 || errorResponse.status === 201 ){
      alert("User was updated succesfully.")
    }
    else if (errorResponse.status === 404 ){
      alert("User not found.")
      console.error('Client side error : ', errorResponse.error.message);
    }
    else if (errorResponse.status === 405){
      alert("User was not updated.Check data and try again")
      console.error('Server side error : ', errorResponse);
    }
    else{
      alert("Unknown problem.User was not updated.")
    }
    return throwError("There is a problem with server");

  }


  deleteUser(deleteemail){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application-json')
    const signUrl = 'http://127.0.0.1:5000/user/'+ deleteemail;
    return this.httpClient.delete(signUrl,{headers: httpHeaders}).pipe(catchError(this.handleDelError))
  }

  private handleDelError(errorResponse : HttpErrorResponse){
    if(errorResponse.status === 200 || errorResponse.status === 201 ){
      alert("User was deleted succesfully.")
    }
    else if (errorResponse.status === 404 ){
      alert("User not found.")
      console.error('Client side error : ', errorResponse.error.message);
    }
    else if (errorResponse.status === 405){
      alert("User was not deleted.Check data and try again")
      console.error('Server side error : ', errorResponse);
    }
    else{
      alert("Unknown problem.User was not deleted.")
    }
    return throwError("There is a problem with server");

  }
}
