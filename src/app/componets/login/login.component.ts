import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  @ViewChild('password')
   public textbox!: TextBoxComponent;
  


  constructor( private auth : AuthService){
   

  }
  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = 'password';
}

public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
}

  
  
  public form: FormGroup = new FormGroup({
    
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    
});  

// hasError(controlName: string, errorName: string): boolean {
//   const control = this.form.get(controlName);
//   return control?.dirty && control.errors && control.errors[errorName];
// }





// public submitForm(): void {
//     this.form.markAllAsTouched();
// }
submitForm(){

  if (this.form.valid) {
    console.log('Form Submitted', this.form.value);
    // Add your logic here to handle the form submission
  } else {
    console.log('Form Invalid');
  }

  this.auth.login(this.form.value)
  .subscribe({
    next:(res)=>{
      // alert(res.message)
    },
    error:(err)=>{
      // alert(err?.error.message)
    }
  })

  this.form.markAllAsTouched();
}

public clearForm(): void {
    this.form.reset();
}
  ngOnInit(): void {
    
  }

  
}

  



