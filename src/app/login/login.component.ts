import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../sass/styles.scss','./login.component.scss']
})
export class LoginComponent implements OnInit {
  error : string;
  constructor(private loginService : LoginService) { }

  userList : any;
  ngOnInit(): void {
  }

  
  getUser(userdata)
  {
    this.loginService.getUser(userdata).subscribe(data =>{
      console.log(data);
      const userDatas = data
      console.log('THERE')
      console.log(userDatas)
      localStorage.setItem('user', JSON.stringify(JSON.parse(JSON.stringify(userDatas)).user))
      localStorage.setItem('token', JSON.parse(JSON.stringify(userDatas)).basicAuthToken)
    }, (error)=>{
      console.log(error)
      this.error = error
    })
   }
  }

