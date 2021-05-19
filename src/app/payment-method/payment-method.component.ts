import { Component, OnInit } from '@angular/core';
import {faBars, faWallet, faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss', '../sass/styles.css', '../sass/utilities/__dir-utilities.scss']
})
export class PaymentMethodComponent implements OnInit {
  faBars = faBars;
  faWallet = faWallet;
  faEdit = faEdit;
  constructor() { }

  ngOnInit(): void {
  }
  public logout(){
    localStorage.clear();
  }

}
