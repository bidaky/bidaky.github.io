import { Component, OnInit } from '@angular/core';
import { faBars, faTimes, faCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {
  faCheck = faCheck
  faBars = faBars
  faTimes = faTimes
  constructor() { }

  ngOnInit(): void {
  }

}
