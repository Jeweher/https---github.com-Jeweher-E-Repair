import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '@progress/kendo-angular-dialog';
import { pencilIcon } from '@progress/kendo-svg-icons';
// import { NotificationService } from '@progress/kendo-angular-notification';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.css']
})
export class DialogProfileComponent implements OnInit {
  public icons = { edite:pencilIcon };
  user:any
  email:any
  id:any
  opened=false
  opened1=false
  username :any
  resetPasswordForm!: FormGroup
  resetNomForm!: FormGroup
  constructor(private router: Router ,
     private fb:FormBuilder,private dialogService : DialogService,) {}
    //  private notificationService:NotificationService
  usernameTrig() {
  }

  ngOnInit(): void {
    // this.username = this.auth.getFullNameForStore()
    // this.email = this.auth.getEmail()
    // this.id = this.auth.getId()
    this.resetPasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });


    this.resetNomForm = this.fb.group({
      Nom: ['', Validators.required],
      confirm: ['', Validators.required]
    }, { validators: this.NomMatchValidator });
}
close()
{ this.opened = false}
open(){
this.opened = true}

open1(){
  this.opened1 = true}

  close1()
{ this.opened1 = false}


passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirm = control.get('confirm');

  if (password!.value !== confirm!.value) {
    confirm!.setErrors({ mustMatch: true });
    return { mustMatch: true };
  } else {
    confirm!.setErrors(null);
    return null;
  }
}



NomMatchValidator(control: AbstractControl): ValidationErrors | null {
  const Nom = control.get('Nom');
  const confirm = control.get('confirm');

  if (Nom!.value !== confirm!.value) {
    confirm!.setErrors({ mustMatch: true });
    return { mustMatch: true };
  } else {
    confirm!.setErrors(null);
    return null;
  }
}

onSubmit() {

  // this.userService.UpdatePassword(this.resetPasswordForm.get('password')!.value, this.id)
  //   .subscribe({
  //     next: (_) => {
  //       this.opened = false
  //       this.notificationService.show({
  //         content: "Password updated successfully",
  //         animation: {
  //           type: "slide",
  //           duration: 500,
  //         },
  //         type: { style: "success" },
  //       });
  //     },
  //     error: (err: HttpErrorResponse) => {
  //       this.notificationService.show({
  //         content: "error  while updating password",
  //         animation: {
  //           type: "slide",
  //           duration: 500,
  //         },
  //         type: { style: "error" },
  //       });
  //     }
  //   })
}




}

