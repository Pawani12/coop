import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-scholorlist',
  templateUrl: './scholorlist.component.html',
  styleUrls: ['./scholorlist.component.css']
})
export class ScholorlistComponent implements OnInit {
  scholorlist;

  constructor(private studentServices: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents() {

    this.studentServices.getStudent().subscribe((data: any) => {
      this.scholorlist = data.object;
    });
  }

}
