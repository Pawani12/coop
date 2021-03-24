import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private toastr: ToastrService){}

  title = 'vaidateform';
  // showSucess(){
  //   this.toastr.success('Hello World!','Toster fun!');
  // }
  // showError(){
  //   this.toastr.error('Hello World!','Error!');
  // }
  infoSuccess(){
    this.toastr.info('Hello World!','Info!');
  }
  warningSuccess(){
    this.toastr.warning('Hello World','Warning');
  }
}
