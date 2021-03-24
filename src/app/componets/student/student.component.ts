import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private sub: Subscription;

public StudentGroup :FormGroup


  constructor(private fb: FormBuilder,
    private studentService: StudentService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.setForm();
      this.sub = this._route.paramMap.subscribe(
        params => {
          const id = +params.get('id');
  
          if (id) {
            this.getStudentById(id);
            //this.updateClick = true;
          } else {
            //this.saveClick = true;
          }
        }
      );
     
    
  }
  setForm() {
    this.StudentGroup = this.fb.group({
      usernameCtrl: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern('[a-zA-Z ]*')])],
      ageCtrl: [null, Validators.required],
      idctrl :[null],
      selctrl :[null],
      rbtnctrl :[null]
})
    

  }
  save() { 
    let name = this.StudentGroup.controls['usernameCtrl'].value; 
    let age = this.StudentGroup.controls['ageCtrl'].value;
    let sgender = this.StudentGroup.controls['rbtnctrl'].value;
    let srank = this.StudentGroup.controls['selctrl'].value;
    


    const studentObject = {
      'studentName' : name,
      'studentAge' : age,
      'gender' : sgender,
      'rank' : srank

    }
    this.studentService.saveStudent(studentObject).subscribe((data: any) => {

    });
  }
  getStudentById(id): void {
    this.studentService.getStudentById(id).subscribe((data: any) => {
      //this.StudentGroup = data;
      this.StudentGroup.controls.idctrl.setValue(data.studentId);
      this.StudentGroup.controls.usernameCtrl.setValue(data.studentName);
      this.StudentGroup.controls.ageCtrl.setValue(data.studentAge);
      this.StudentGroup.controls.selctrl.setValue(data.rank);
      this.StudentGroup.controls.rbtnctrl.setValue(data.gender);
      
    })
  }
  UpdateStudent(){

    let sid = this.StudentGroup.controls['idctrl'].value; 
    let sname = this.StudentGroup.controls['usernameCtrl'].value; 
    let sage = this.StudentGroup.controls['ageCtrl'].value;
    let srank = this.StudentGroup.controls['rank'].value;
    let sgender = this.StudentGroup.controls['rbtnctrl'].value;
    const NewStdO = {
      studentId :sid,
      studentName : sname,
      studentAge : sage,
      rank:srank,
      gender :sgender
      

    }
    this.studentService.updateStudent(NewStdO).subscribe((data: any) => {

    });
  }

}