import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientRegisterComponent} from './componets/client-register/client-register.component';
import { ScholorlistComponent } from './componets/scholorlist/scholorlist.component';
import { StudentListComponent } from './componets/student-list/student-list.component';
import { StudentComponent } from './componets/student/student.component';
import { FormComponent } from './forms/form/form.component';
import { ScholorComponent } from './componets/scholor/scholor.component';
import { LoginComponent } from './login/login.component';
import { ClientListComponent } from './componets/client-list/client-list.component';
import { ProductsComponent } from './componets/products/products.component';
import { PrdouctListComponent } from './componets/prdouct-list/prdouct-list.component';
import {EmpLoginComponent} from './componets/emp-login/emp-login.component'
import { AuthGuard } from './helpers/guards/auth.guard';


const routes: Routes = [
  {  
    path: 'student', component: StudentComponent
  },
  {  
    path: 'form', component: FormComponent
  },
  {
    path: 'studentList', component: StudentListComponent
  },
  { path: 'student/:id/edit', component: StudentComponent },
  {
    path: 'clientForm', component: ClientRegisterComponent
  },
  {
    path: 'scholor',component: ScholorComponent
  },
  {
    path: 'scholorlist',component: ScholorlistComponent
  },
  { path: 'scholor/:id/edit', component: ScholorComponent },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'clientlist', component: ClientListComponent
  },
  {
    path: 'clientForm/:id/edit', component: ClientRegisterComponent
  },
  {
    path: 'productForm/:id/edit', component: ProductsComponent
  },
  {
    path: 'productForm', component: ProductsComponent
  },
  {
    path: 'productList', component: PrdouctListComponent
  },
  {
    path: 'empLogin', component: EmpLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
