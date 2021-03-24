import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList;

  constructor(private studentServices: StudentService) { }

  ngOnInit() {
    this.getStudents();

  }
  getStudents() {

    this.studentServices.getStudent().subscribe((data: any) => {
      this.studentList = data.object;
    });
  }
  onDeleteClick(studentId) {
    this.studentServices.deleteStudent(studentId).subscribe((data: any) => {
      this.getStudents();
    });
  }
  onUpdateClick(studentId) {

    this.studentServices.getStudent().subscribe((data: any) => {
      this.studentList = data.object;
      this.getStudents();
    });
  }
}
