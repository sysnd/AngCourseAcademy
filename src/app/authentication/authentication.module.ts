import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, RegisterComponent],
  imports: [
      ReactiveFormsModule,
      RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
