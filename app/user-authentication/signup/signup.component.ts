import { FormDataService } from '../../services/form-data.service';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/fontawesome-free-brands';
import { AuthUserService } from '../../services/auth-user.service';

import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  faGoogle = faGoogle;
  signupForm: FormGroup;
  states: any;
  errors: any;

  // tslint:disable-next-line:max-line-length
  regexEmail: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  regexDOB: any = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
  regexStreet: any = /^\d+\s[A-z]+\s[A-z]+\.?/;
  regexPassword: any = /^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{7,30}$/;

  constructor(private user: AuthUserService, private fb: FormBuilder, private router: Router) {
  }

  get name() {
    return this.signupForm.get('name');
  }

  get firstname() {
    return this.signupForm.get('name.firstname');
  }

  get lastname() {
    return this.signupForm.get('name.lastname');
  }

  get dob() {
    return this.signupForm.get('dob');
  }

  get address() {
    return this.signupForm.get('address');
  }

  get streetAddress() {
    return this.signupForm.get('address.streetAddress');
  }

  get city() {
    return this.signupForm.get('address.city');
  }

  get state() {
    return this.signupForm.get('address.state');
  }

  get zipcode() {
    return this.signupForm.get('address.zipcode');
  }

  get accountInfo() {
    return this.signupForm.get('accountInfo');
  }

  get emailInput() {
    return this.signupForm.get('accountInfo.emailInput');
  }

  get email() {
    return this.signupForm.get('accountInfo.emailInput.email');
  }

  get confirmEmail() {
    return this.signupForm.get('accountInfo.emailInput.confirmEmail');
  }

  get passwordInput() {
    return this.signupForm.get('accountInfo.passwordInput');
  }

  get password() {
    return this.signupForm.get('accountInfo.passwordInput.password');
  }

  get confirmPassword() {
    return this.signupForm.get('accountInfo.passwordInput.confirmPassword');
  }

  ngOnInit() {
    this.states = FormDataService.getStates();

    this.signupForm = this.fb.group({
      name: this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required]
      }),
      dob: ['', [Validators.required, Validators.pattern(this.regexDOB), FormDataService.dateValidator]],
      address: this.fb.group({
        streetAddress: ['', [Validators.required, Validators.pattern(this.regexStreet)]],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]]
      }),
      accountInfo: this.fb.group({
        emailInput: this.fb.group({
          email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
          confirmEmail: ['', [Validators.required, FormDataService.emailMatchValidator]],
        }),
        passwordInput: this.fb.group({
          password: ['', [Validators.required, Validators.minLength(7), Validators.pattern(this.regexPassword)]],
          confirmPassword: ['', [Validators.required, FormDataService.passwordMatchValidator]],
        })
      })
    });
  }

  onSubmit() {
    return this.user.signUp(this.signupForm.value)
    .subscribe(
      res => {
        this.errors = null;
        this.router.navigate(['/login']);
      },
      err => {
        this.signupForm.markAsUntouched();
        this.errors = err.error;
      }
    );
  }

  isNumber(event) {
    event = (event) ? event : window.event;
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
  }

}
