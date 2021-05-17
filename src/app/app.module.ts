import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService} from './services/registration.service';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCardComponent } from './add-card/add-card.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { RequestMoneyComponent } from './request-money/request-money.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    EditProfileComponent,
    ProfileComponent,
    AddCardComponent,
    SendMoneyComponent,
    RequestMoneyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    RegistrationService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
