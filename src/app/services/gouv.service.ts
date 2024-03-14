import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GouvernoratModel } from '../models/gouvernorat-model';

@Injectable({
  providedIn: 'root'
})
export class GouvService {
  private baseUrl: string="https://localhost:7261/api/Gouvernorat/"

  constructor(private http : HttpClient) { }


  GetGouvList( GouvList: GouvernoratModel []=[]){
    return this .http.get<GouvernoratModel[]>(this.baseUrl + "Gouvernorat" )
  }
}
