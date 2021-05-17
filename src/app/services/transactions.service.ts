import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient : HttpClient) { }

  postCard(carddata){
    return this.httpClient.post('http://127.0.0.1:5000/add-card', carddata).pipe(catchError(this.handleError))
  }
  private handleError(errorResponse : HttpErrorResponse){
    if(errorResponse.status === 200 || errorResponse.status === 201 ){
      alert("Card was created succesfully.")
    }
    else if (errorResponse.status === 403 ){
      alert("Card with this number already exists!")
      console.error('Client side error : ', errorResponse.error.message);
    }
    else if (errorResponse.status === 405){
      alert("Card was not added. There is a problem with server.Check data and try again")
      console.error('Server side error : ', errorResponse);
    }
    else{
      alert("Unknown problem.Card was not added.")
    }
    return throwError("There is a problem with server");

  }

  send(senddata){
    return this.httpClient.post('http://127.0.0.1:5000/send', senddata).pipe(catchError(this.handleSendError))
  }
  private handleSendError(errorResponse : HttpErrorResponse){
    if(errorResponse.status === 200 || errorResponse.status === 201 ){
      alert("Successfull transaction")
    }
    else if (errorResponse.status === 405){
      alert("Transaction was failed. There is a problem with server.Check data and try again")
      console.error('Server side error : ', errorResponse);
    }
    else{
      alert("Unknown problem.")
    }
    return throwError("There is a problem with server");

  }
  request(requestdata){
    return this.httpClient.post('http://127.0.0.1:5000/request-money', requestdata).pipe(catchError(this.handleSendError))
  }

}

