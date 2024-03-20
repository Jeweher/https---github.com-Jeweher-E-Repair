import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class delegService {
    Url=environment.apiUrl;
    constructor(
        private router: Router,
        private _http: HttpClient

    ) {}

    protected prepareHeader(): Object {
      let headers = new HttpHeaders();
       headers = headers.set('Accept', 'application/json');
       return { headers: headers }; }
    
    
       GetDelegationByGouvID(id: string) {
        const route=this.Url+"/Delegation/"+id
        return this._http.get<any>(route, this.prepareHeader()).pipe(
          map(res => res as any)
        );
}

}