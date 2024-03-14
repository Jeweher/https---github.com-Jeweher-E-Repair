import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DelegService {
  private baseUrl: string="https://localhost:7261/api/Delegation/"

  constructor(private http : HttpClient) {


   }

   GetDelegByGouvId(GouvId:string ){

    return this .http.get(this.baseUrl + "Delegation/" +GouvId)
    
   }

}
