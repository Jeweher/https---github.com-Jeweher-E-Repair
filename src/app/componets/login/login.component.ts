import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  @ViewChild('password')
  public textbox!: TextBoxComponent;
  form!: FormGroup;



  constructor(private userService:  UserService ,
    private formBuilder: FormBuilder,

     ) {


  }
  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = 'password';
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
  }



  // public form: FormGroup = new FormGroup({

  //   password: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required, Validators.email]),

  // });

  // hasError(controlName: string, errorName: string): boolean {
  //   const control = this.form.get(controlName);
  //   return control?.dirty && control.errors && control.errors[errorName];
  // }





  // public submitForm(): void {
  //     this.form.markAllAsTouched();
  // }


  get f() { return this.form.controls; }
  submitForm() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
      // Add your logic here to handle the form submission
  
      const password = this.f['password']?.value;
      const email = this.f['email']?.value;
  
      if (password && email) {
        this.userService.login(password, email)
          .subscribe({
            next: (res) => {
              // alert(res.message)
            },
            error: (err) => {
              // alert(err?.error.message)
            }
          })
      }
    } else {
      console.log('Form Invalid');
    }
  
    this.form.markAllAsTouched();
  }

  public clearForm(): void {
    this.form.reset();
  }
  ngOnInit()  {
    this.form = this.formBuilder.group({
      password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  }


}





