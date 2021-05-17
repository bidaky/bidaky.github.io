import { Component, OnInit } from '@angular/core';
import { faCamera, faEdit, faExclamation, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { UserOperationService } from '../services/user-operation.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  faCamera = faCamera;
  faEdit = faEdit;
  faExclamation = faExclamation;
  faExclamationCircle =faExclamationCircle;

  error : string

  userData = JSON.parse(localStorage.getItem('user'))
  firstname = this.userData.firstname
  lastname = this.userData.lastname
  phoneNumber = this.userData.phoneNumber
  birthDate = this.userData.birthDate
  email = this.userData.email

  constructor(private deleteuser : UserOperationService) { }

  deleteUser(){
    const useremail = JSON.parse(localStorage.getItem('user')).email
    this.deleteuser.deleteUser(useremail).subscribe(data =>{
      console.log(data);
      localStorage.clear
    }, (error)=>{
      console.log(error)
      this.error = error
    }, )
  }
  

  ngOnInit(): void {
  }

}
