import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  
  private sub: Subscription;
  public empGroup: FormGroup

  constructor(private fb: FormBuilder,
    private empServices :EmployeeService) { }

  ngOnInit() {
  }
  setForm() {
    this.empGroup = this.fb.group({
      nameCtrl: [null],
      ageCtrl: [null],
      mailCtrl :[null],
      btnCtrl :[null],
      cityCtrl :[null],
      idCtrl : [null]
})
}
save() { 
  let name = this.empGroup.controls['nameCtrl'].value; 
  let age = this.empGroup.controls['ageCtrl'].value;
  let mail = this.empGroup.controls['mailCtrl'].value;
  let gender = this.empGroup.controls['btnCtrl'].value;
  let city = this.empGroup.controls['cityCtrl'].value;
  
  const empObject = {
    'empName' : name,
    'empAge' :age,
    'empEmail' : mail,
    'empGender': gender,
    'empCity' : city


  }
  this.empServices.saveEmployee(empObject).subscribe((data: any) => {

  });
}}
