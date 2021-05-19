import {Component, OnInit} from '@angular/core';
import {faBars, faTimes, faCheck} from '@fortawesome/free-solid-svg-icons';
import {TransactionsService} from '../services/transactions.service';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {
  error: string;
  faCheck = faCheck;
  faBars = faBars;
  faTimes = faTimes;
  money: number = 0;
  email: string;
  fee: number = 7.21;
  userData = JSON.parse(localStorage.getItem('user'));
  id = this.userData.id;

  public logout() {
    localStorage.clear();
  }

  constructor(private transaction: TransactionsService) {
  }

  ngOnInit(): void {
  }

  sendMoney(sendform) {
    console.log(sendform);
    const newForm = {
      'sum_of_money': sendform.money + this.fee,
      'user_id': this.id,
      'recipient': sendform.email
    };
    console.log(newForm);
    this.transaction.send(newForm).subscribe(datas => {
      console.log(datas);
    }, (error) => {
      console.log(error);
      this.error = error;
    });
  }
}
