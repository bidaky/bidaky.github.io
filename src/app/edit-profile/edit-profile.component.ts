import { Component, OnInit } from '@angular/core';
import { UserOperationService } from '../services/user-operation.service'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
     error : string
     userData = JSON.parse(localStorage.getItem('user'))
     firstname = this.userData.firstname
     lastname = this.userData.lastname
     phoneNumber = this.userData.phoneNumber
     email = this.userData.email

  constructor(private userService : UserOperationService) { }
  
  editUser(editData){
    console.log(editData.password)
    this.userService.updateUser(editData, this.email).subscribe(data =>{
      console.log(data);
      localStorage.removeItem('user')
      localStorage.setItem('user',  JSON.stringify(data))
    }, (error)=>{
      console.log(error)
      this.error = error
    }, )
  }
  



  ngOnInit(): void {
  }

}
