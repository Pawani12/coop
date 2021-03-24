import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
   private _router: Router,
   private toastr: ToastrService
  ) { }
  
  canActivate(): boolean {

    if(localStorage.getItem('user')){
    
      let user = JSON.parse(localStorage.getItem('user'));

      if (user.clientRole == 1) {
        return true;
      } else {
        this._router.navigate(['/login']);
        this.toastr.error('Access Denied');
        return false;
        
      }
  } else {
    this._router.navigate(['/login']);
    this.toastr.error('Please Login');
    return false;
  }
    
  }

  
}
