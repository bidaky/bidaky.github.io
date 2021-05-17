import { Component, OnInit } from '@angular/core';
import { CustomValidationService } from '../services/custom-validation.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})

export class RegistrationComponent implements OnInit{
  constructor(public registrationService : RegistrationService){}
  error : string;
  
  ngOnInit(): void { 
  }    

    addUser(data)
  {
    console.log(data);
    // const newFormData = { 
    //   firstname : data.firstname,
    //   lastname : data.lastname,
    //   email: data.email,
    //   phoneNumber : data.phoneNumber,
    //   password : data.password,
    //   birthDate : data.birthDate,
    //   role : data.role
    // }
    // console.log(newFormData)
    this.registrationService.postUser(data).subscribe(datas =>{
      console.log(datas)
    }, (error)=>{
      console.log(error)
      this.error = error
    })
  }
 
}
