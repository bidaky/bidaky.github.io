import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
const EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    public registrationService: RegistrationService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  role = 'Regular';
  error: string;
  regForm: FormGroup;
  ngOnInit(): void {

  }

  get f() {
    return this.regForm.controls;
  }

  private createForm(): void {
    this.regForm = this.fb.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        phoneNumber: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN), Validators.minLength(5), Validators.maxLength(40)]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
        confPassword: ['', [Validators.required]],
        birthDate: [''],
        role : [this.role]
      },
      { validator: this.passwordMatcher }
    );
  }
  changeRole($event): void {
    this.role = $event.target.value;
    this.regForm.controls.role.setValue(this.role);
  }
  private passwordMatcher(group: FormGroup): null | { noMatch: boolean } {
    if (group.get('password') !== null) {
      const pass = group.get('password').value;
      const confPassword = group.get('confPassword').value;
      return pass === confPassword ? null : { noMatch: true };
    }
  }
  addUser(): void {
    console.log(this.regForm.value);
    this.registrationService.postUser(this.regForm.value).subscribe(
      (datas) => {
        console.log(datas);
      },
      (error) => {
        console.log(error);
        this.error = error;
      }
    );
  }
}
