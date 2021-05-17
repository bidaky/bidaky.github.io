import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AddCardComponent } from './add-card/add-card.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes : Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'add-card', component: AddCardComponent}
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports : [ RouterModule]
})
export class AppRoutingModule { }
