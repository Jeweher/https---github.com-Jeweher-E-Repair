import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent   implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  role: string = '';
  constructor(){}
  
  
  
  
  ngOnInit(): void {
   
  }


  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon= "fa-eye-slash";
    this.isText ? this.type = "text" : this.type= "password";


  }
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


}
