import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="signin-form-container">
      <form [formGroup]="signinForm" (ngSubmit)="signin();" class="signinform">
        <h1>Complete the form below to sign in.</h1>
        <fieldset>
          <legend>User Sign In</legend>
          <label for="email">Email</label>
          <input formControlName="email" type="email" id="email" name="email">
          @if (signinForm.controls['email'].touched && signinForm.controls['email'].hasError('required')) {
            <small class="error">Email is required.</small>
          }
          @if (signinForm.controls['email'].touched && signinForm.controls['email'].hasError('email')) {
            <small class="error">Invalid email address.</small>
          }

          <label for="password">Password</label>
          <input formControlName="password" id="password" type="password">
          @if (signinForm.controls['password'].touched && signinForm.controls['password'].hasError('required')) {
            <small class="error">Password is required.</small>
          }
          @if (signinForm.controls['password'].touched &&signinForm.controls['password'].hasError('pattern')) {
            <small class="error">Password must be at least 8 characters long and contain at least one uppercase letter and one number.</small>
          }
          <input type="submit" [disabled]="!signinForm.valid" value="Sign In" id= submitButton>
        </fieldset>
      </form>
    </div>
  `,
  styles:
  `
  .signinform h1 {
    text-align: center;
  }

  fieldset {
    padding: 10px 10px 10px 10px;
    margin: 0px 30px 0px 30px;
  }

  #submitButton {
    margin: 7px;
  }

  label {
    padding: 10px;
  }

  `
})
export class SigninComponent {
  signinForm: FormGroup = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [null, Validators.compose([Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/)])]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) {

    }

    signin(){
      const email = this.signinForm.controls['email'].value;
      const password = this.signinForm.controls['password'].value;

      if(this.authService.signin(email, password)){
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        this.router.navigate([returnUrl]);
      } else {
        alert('Invalid email or password.Please try again.');
      }
    }
}
