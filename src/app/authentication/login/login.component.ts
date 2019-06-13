import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private authService: AuthenticationService,
              private fb: FormBuilder,
              private router: Router) {
                
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  }); 
               }

  ngOnInit() {
  }

  onLogin(): void {
    this.authService
    .login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe((user) => {
      this.router.navigateByUrl('users/list');
    }, (error) => {
      console.error(error);
    });
  }
}
