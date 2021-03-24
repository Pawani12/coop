import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AurthserviceService } from '../services/aurthservice.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginGroup: FormGroup; 

  

  constructor(private fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private toastr: ToastrService,
    private _aurtService: AurthserviceService) { 
   
  }

  ngOnInit() {

    this.setForm();
  }
  setForm(){
    this.loginGroup = this.fb.group({
      usernameCtrl:[null,Validators.required],
      pswrdctrl:[null,Validators.required]

    })
  }
  
  
  checkData(){
    
    let uEmail = this.loginGroup.controls['usernameCtrl'].value; 
    let uPassword = this.loginGroup.controls['pswrdctrl'].value;
    const loginInfo = {
      email : uEmail,
      password : uPassword
    }
    

  this._aurtService.savelogin(loginInfo).subscribe((data: any) => {
    if(data != null) {
      // this._router.navigateByUrl('studentList');
      localStorage.setItem('user', JSON.stringify(data));
      this.toastr.success('Welcome' +" " + data.email);
    }
    else{
     this.toastr.error('Error!');
      }
  });
    

    // if(sEmail == uEmail && sPassword == uPassword){
    //     this._router.navigateByUrl('studentList');
    //   }
    //   else{
    //     alert("invalid credintial");
    //   }
     
  
}

}
