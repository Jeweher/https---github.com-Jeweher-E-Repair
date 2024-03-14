import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetenceModel } from 'src/app/models/competence-model';
import { GouvernoratModel } from 'src/app/models/gouvernorat-model';
import { AuthService } from 'src/app/services/auth.service';
import { CompeService } from 'src/app/services/compe.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  passwordVisibility: boolean;
  loginForm: FormGroup;
  role: string = '';
  CompList: CompetenceModel[] = [];
  GouvList: GouvernoratModel[] = [];


  public events: string[] = [];
  public listItems: CompetenceModel[] = [];
  public value: GouvernoratModel[] = [];
  public roles = [
    { label: 'Client', value: 'client' },
    { label: 'Reparateur', value: 'reparateur' }
  ];
   
  public form: FormGroup;
  public data: any = {
    Nom: '',
    Prenom: '',
    email: ''
  };

  ngOnInit(): void {
    this.form = this.fb.group({
      role: ['', Validators.required],
    });
    //this.GetDelegByGouvId();
    // this.GetGouvList();
  }
  

  constructor(private fb: FormBuilder, private auth: AuthService, private comp: CompeService, private router: Router) {
    
    this.form = this.fb.group({
      Nom: ['', Validators.required],
      Prenom: ['', Validators.required],
      numberOfNights: ['', Validators.required],
      MotDePasse: ['', Validators.required],
      role: ['', Validators.required],
      competence: ['', Validators.required],
      phone2: ['', Validators.required],
    });

    this.loginForm = this.fb.group({
      password: ['', Validators.required]
    });
    this.passwordVisibility = false;
  }

  // public valueChange($event) {
  // var GouvId =event.id 
  // this.GetDelegByGouvId(GouvId);

  // }
  public valueChange(value: any): void {
    this.log("valueChange", value);
  }

  public selectionChange(value: any): void {
    this.log('selectionChange', value);
  }

  public filterChange(filter: any): void {
    this.log('filterChange', filter);
  }


  public open(): void {
    this.log('open');
  }

  public close(): void {
    this.log('close');
  }

  public opened(): void {
    this.log('opened', 'after the popup has been opened');
  }

  public closed(): void {
    this.log('closed', 'after the popup has been closed');
  }

  public focus(): void {
    this.log('focus');
  }

  public blur(): void {
    this.log('blur');
  }

  private log(event: string, arg?: any): void {
    this.events.unshift(`${event} ${arg || ''}`);
  }



  // onSubmit() {
  //   // Votre code pour les soumissions de formulaires ici
  //   console.log(this.form.value);
  // }

  toggleVisibility(): void {
    this.passwordVisibility = !this.passwordVisibility;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      // Add your logic here to handle the form submission
    } else {
      console.log('Form Invalid');
    }
  }


  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  public clearForm(): void {
    this.form.reset();
  }

  onSignUp() {
    if (this.form.valid) {

      this.auth.signUp(this.form.value)
        .subscribe({
          next: (res) => {
            alert(res.message);
            this.form.reset();
            this.router.navigate(['login']);

          },
          error: (err) => {
            alert(err?.error.message)
          }
        })
      console.log(this.form.value)
    } else {
      this.validateAllFormFileds(this.form)

    }
  }

  private validateAllFormFileds(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFileds(control);
      }
    });

  }
}