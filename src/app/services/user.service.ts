import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from 'src/app/models/User-model';


@Injectable({ providedIn: 'root' })
export class UserService {
  userSubject: BehaviorSubject<Users | null>;
  public user: Observable<Users | null>;
    Url=environment.apiUrl;
    constructor(
        private router: Router,
        private _http: HttpClient

    ) {
      this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.user = this.userSubject.asObservable();
    }


  // Définition de la méthode signUp qui prend un objet de modèle d'utilisateur en paramètre
  signUp(user:Users){
    // Utilisation de la méthode post de l'objet http pour envoyer une requête POST
    // Retourne une observable qui émettra une réponse de type any
    return this._http.post<any>(`${environment.apiUrl}/register/`,this.prepareHeader()).pipe(
      map(res => res as any))
      
      
  }

  login(email: string, MotDePasse: string){
    const body = { Email: email, Mdp: MotDePasse};
    return this._http.post<any>(`${environment.apiUrl}/login/`, body, this.prepareHeader()).pipe(
      map(res => res as any)
    );
  }
  
  protected prepareHeader(): Object {
    let headers = new HttpHeaders();
     headers = headers.set('Accept', 'application/json');
     return { headers: headers }; }
}