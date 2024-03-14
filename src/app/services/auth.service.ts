import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string="https://localhost:7261/api/Utilisateur/"

  constructor(private http : HttpClient) { }
  // Définition de la méthode signUp qui prend un objet de modèle d'utilisateur en paramètre
  signUp(UtilisateurModel:any){
    // Utilisation de la méthode post de l'objet http pour envoyer une requête POST
    // Retourne une observable qui émettra une réponse de type any
    return this.http.post<any>(`${this.baseUrl}register`,UtilisateurModel)
     // L'url utilisée est construite en concaténant la valeur de baseUrl avec 'register'

  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)

  }
}
