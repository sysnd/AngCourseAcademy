import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onRegister(): void {
    this.usersService.getAllUsers().subscribe((users) => {
      const email = this.registerForm.value.email.toLowerCase();
      if (users.find(u => u.email.toLowerCase() === email)) {
        return;
      }

      this.usersService.addNewUser(this.registerForm.value)
        .subscribe(() => {
          this.router.navigateByUrl('auth/login');
        });

    });
  }

}
