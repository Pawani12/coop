import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './forms/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './componets/student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './componets/student-list/student-list.component';
import { ClientRegisterComponent} from './componets/client-register/client-register.component';
import { ScholorComponent } from './componets/scholor/scholor.component';
import { ScholorlistComponent } from './componets/scholorlist/scholorlist.component';
import { TeacherModule } from './teacher/teacher.module';
import { EmployeeModule } from './employee/employee.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { from } from 'rxjs';
import { ClientListComponent } from './componets/client-list/client-list.component';
import { MatCheckboxModule, MatDatepickerModule, MatRadioModule } from '@angular/material';
import { MaterialModule } from './material';
import { ProductsComponent } from './componets/products/products.component';
import { PrdouctListComponent } from './componets/prdouct-list/prdouct-list.component';
import { EmpLoginComponent } from './componets/emp-login/emp-login.component';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StudentComponent,
    StudentListComponent,
    ClientRegisterComponent,
    ScholorComponent,
    ScholorlistComponent,
    LoginComponent,
    ClientListComponent,
    ProductsComponent,
    PrdouctListComponent,
    EmpLoginComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule, 
    NgbAlertModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:1500,
      positionClass: 'toast-top-right',
      }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TeacherModule,
    EmployeeModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
