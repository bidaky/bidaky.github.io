import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  faBars = faBars;
  
  constructor(private transactions : TransactionsService) { }

  error : string;

  ngOnInit(): void {
  }
  addCard(data)
  {
    this.transactions.postCard(data).subscribe(datas =>{
      console.log(datas)
    }, (error)=>{
      console.log(error)
      this.error = error
    })
  }

}
