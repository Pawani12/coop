import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  saveEmployee(empObject){
    return this.httpClient.post(this.apiUrl + '/employee/saveEmployee', empObject);
  }
}
