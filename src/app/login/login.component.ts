import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../sass/styles.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string;

  constructor(private loginService: LoginService, private router: Router) {
  }

  userList: any;

  ngOnInit(): void {
  }


  getUser(userdata) {
    this.loginService.getUser(userdata).subscribe(data => {
      console.log(data);
      const userDatas = data;
      console.log(userDatas);
      this.router.navigate(['/profile']);
      localStorage.setItem('user', JSON.stringify(JSON.parse(JSON.stringify(userDatas)).user));
      localStorage.setItem('token', JSON.parse(JSON.stringify(userDatas)).basicAuthToken);
    }, (error) => {
      console.log(error);
      this.error = error;
    });
  }
}

