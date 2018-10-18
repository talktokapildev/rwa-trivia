import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreState, coreState } from '../../store';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

export class Login {
  mode: SignInMode;
  loginForm: FormGroup;
  notificationMsg: string;
  errorStatus: boolean;
  subs: Subscription[] = [];
  notificationLogs: string[];

  // tslint:disable-next-line:max-line-length
  email_regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public fb: FormBuilder,
    public store: Store<CoreState>) {

    this.mode = SignInMode.signIn;  // default
    this.notificationMsg = '';
    this.errorStatus = false;

    this.loginForm = this.fb.group({
      mode: [0],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.email_regexp)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['']
    }, { validator: loginFormValidator }
    );

    this.loginForm.get('mode').valueChanges.subscribe((mode: number) => {
      switch (mode) {
        case 1:
          // Sign up
          this.loginForm.get('confirmPassword').setValidators(Validators.compose([Validators.required, Validators.minLength(6)]));
          this.loginForm.get('confirmPassword').updateValueAndValidity();
          break;
        // no break - fall thru
        case 0:
          // Login or Sign up
          this.loginForm.get('confirmPassword').clearValidators();
          this.loginForm.get('password').setValidators(Validators.compose([Validators.required, Validators.minLength(6)]));
          this.loginForm.get('password').updateValueAndValidity();
          break;
        default:
          // Forgot Password
          this.loginForm.get('password').clearValidators();
          this.loginForm.get('confirmPassword').clearValidators();

      }
      this.loginForm.get('password').updateValueAndValidity();
      this.notificationMsg = '';
      this.errorStatus = false;
    });

    this.subs.push(this.store.select(coreState).pipe(select(s => s.resetPasswordLogs))
      .subscribe(notificationLogs => this.notificationLogs = notificationLogs));
  }
}

export enum SignInMode {
  signIn,
  signUp,
  forgotPassword
}

function loginFormValidator(fg: FormGroup): { [key: string]: boolean } {
  // TODO: check if email is already taken

  // Password match validation for Sign up only
  if (fg.get('mode').value === 1 && fg.get('password') && fg.get('confirmPassword')
    && fg.get('password').value && fg.get('confirmPassword').value
    && fg.get('password').value !== fg.get('confirmPassword').value) {
    return { 'passwordmismatch': true };
  }

  return null;
}