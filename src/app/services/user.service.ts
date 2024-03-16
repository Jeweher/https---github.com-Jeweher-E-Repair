import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UtilisateurModel } from 'src/app/models/utilisateur-model';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService {
    Url=environment.apiUrl;
    constructor(
        private router: Router,
        private _http: HttpClient

    ) {
    }


  // Définition de la méthode signUp qui prend un objet de modèle d'utilisateur en paramètre
  signUp(UtilisateurModel:UtilisateurModel){
    // Utilisation de la méthode post de l'objet http pour envoyer une requête POST
    // Retourne une observable qui émettra une réponse de type any
    return this._http.post<UtilisateurModel>(`${this.Url}/register/`,this.prepareHeader()).pipe(
      map(res => res as any))
      
      
  }

  login(email: string, mdp: string){
    const body = { Email: email, Mdp: mdp };
    return this._http.post<any>(`${this.Url}/login/`, body, this.prepareHeader()).pipe(
      map(res => res as any)
    );
  }
  
  protected prepareHeader(): Object {
    let headers = new HttpHeaders();
     headers = headers.set('Accept', 'application/json');
     return { headers: headers }; }
}