import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;

  role: string = '';
  constructor(private fb: FormBuilder,) { }




  ngOnInit(): void {

    this.signUpForm = this.fb.group({

      Nom: ['', Validators.required],
      Prénom: ['', Validators.required],
      birthdate: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      Numérodetélépone: ['', Validators.required],


      Adresse: ['', Validators.required],
      role: ['', Validators.required],

    })

  }




  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";


  }











  public listItems: Array<string> = [
    "Menuisier",
    "Plombier",
    "Électricien",
    "Charpentier",
    "Couvreur",
    "Peintre",
    "Serrurier",
    "Vitrier",
    "Carreleur",
    "Plâtrier",
    "Chauffagiste",
    "Climatiseur",
    "Jardinier",
    "Menuisier aluminium",
    "Ferronnier",
    "Soudeur",
    "Isolateur",
    "Pisciniste",
    "Déménageur",
    "Nettoyant",
    "Bricoleur",
  ];
  public value: any = [''];

  public areaList: Array<string> = [
    'Ariana',
    'Beja',
    'Ben Arous',
    'Gabes',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Kebili',
    'La Manouba',
    'Mahdia',
    'Medenine',
    'Monastir',
    'Nabeul',
    'Sfax',
    'Sidi Bouzid',
    'Siliana',
    'Sousse',
    'Tataouine',
    'Tozeur',
    'Tunis',
    'Zaghouan',
    'El Kef',
    'Bizerte'
  ];





  onSignUp() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value)
    } else {
      this.validateAllFormFileds(this.signUpForm)

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