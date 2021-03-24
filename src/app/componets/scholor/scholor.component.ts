import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/Models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-scholor',
  templateUrl: './scholor.component.html',
  styleUrls: ['./scholor.component.css']
})
export class ScholorComponent implements OnInit {
  private sub: Subscription;

  //create student objct
  student: Student = new Student();

  constructor(private studentService: StudentService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
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

  save(student) {
    this.studentService.saveStudent(student).subscribe((data: any) => {
    });
  }

  getStudentById(id) {

    this.studentService.getStudentById(id).subscribe((data: any) => {
      this.student = data
    })

  }

  update(student) {
    this.studentService.updateStudent(student).subscribe((data: any) => {

    });

  }


}
