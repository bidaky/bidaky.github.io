import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddCardComponent} from './add-card/add-card.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegistrationComponent} from './registration/registration.component';
import {RequestMoneyComponent} from './request-money/request-money.component';
import {SendMoneyComponent} from './send-money/send-money.component';
import {PaymentMethodComponent} from './payment-method/payment-method.component';

export const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'add-card', component: AddCardComponent},
  {path: 'send', component: SendMoneyComponent},
  {path: 'request', component: RequestMoneyComponent},
  {path: 'payment-method', component: PaymentMethodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
