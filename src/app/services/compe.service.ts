import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompetenceModel } from '../models/competence-model';

@Injectable({
  providedIn: 'root'
})
export class CompeService {
  private baseUrl: string="https://localhost:7261/api/"

  constructor(private http : HttpClient) {}

   GetCompList(CompList:CompetenceModel[]=[] ){

    return this .http.get<CompetenceModel[]>(this.baseUrl + "competence" )

  }




}






