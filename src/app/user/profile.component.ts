import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {TOASTR_TOKEN, Toastr} from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }
    .error input {
      background-color: #e3c3c5;
    }
    .error ::-webkit-input-placeholder {
      color: #999;
    }
    .error ::-moz-placeholder {
      color: #999;
    }
    .error :-moz-placeholder {
      color: #999;
    }
    .error :-ms-input-placeholder {
      color: #999;
    }
  `]
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthService,
              private router: Router,
              @Inject(TOASTR_TOKEN) private toastService: Toastr) {
  }

  ngOnInit(): void {
    let firstName = new FormControl(this.authService.currentUser?.firstName, Validators.required);
    let lastName = new FormControl(this.authService.currentUser?.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }

  saveProfile(profileForm: any): void {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(profileForm.firstName, profileForm.lastName);
      this.toastService.success('Successfully updated');
      this.router.navigate(['events']);
    } else {
      this.toastService.error('The required fields were not filled. Please fix.');
    }
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

  isFirstNameInvalid(): boolean {
    return this.profileForm.controls.firstName.invalid && this.profileForm.controls.firstName.touched;
  }

  isLastNameInvalid(): boolean {
    return this.profileForm.controls.lastName.invalid && this.profileForm.controls.lastName.touched;
  }
}
