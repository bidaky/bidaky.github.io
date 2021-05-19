import {Component, OnInit} from '@angular/core';
import {EmailValidator, NgModel} from '@angular/forms';
import {faBars, faTimes, faCheck, faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import {TransactionsService} from '../services/transactions.service';

@Component({
  selector: 'app-request-money',
  templateUrl: './request-money.component.html',
  styleUrls: ['./request-money.component.scss']
})
export class RequestMoneyComponent implements OnInit {
  error: string;
  faCheck = faCheck;
  faBars = faBars;
  faTimes = faTimes;
  money: number = 0;
  email: string;
  fee: number = 7.21;
  userData = JSON.parse(localStorage.getItem('user'));
  id = this.userData.id;

  constructor(private transaction: TransactionsService) {
  }

  ngOnInit(): void {
  }
  public logout(){
    localStorage.clear();
  }
  requestMoney(requestform) {
    console.log(requestform);
    const newForm = {
      'sum_of_money': requestform.money + this.fee,
      'send_id': this.id,
      'email': requestform.email
    };
    console.log(newForm);
    this.transaction.request(newForm).subscribe(datas => {
      console.log(datas);
    }, (error) => {
      console.log(error);
      this.error = error;
    });
  }
}
