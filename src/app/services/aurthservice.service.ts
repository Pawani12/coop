import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AurthserviceService {
  apiUrl = 'http://localhost:8080';// backend url 

  constructor(private httpClient: HttpClient) { }

savelogin(authRequest){
    return this.httpClient.post(this.apiUrl + '/auth/login', authRequest);
}

}
