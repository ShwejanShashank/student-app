import {Component, OnInit} from '@angular/core';
import { Student } from '../../models/student.model';
import {StudentService} from '../../service/student.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  students: Student[] = [];
  student: Student = { studentName: '', studentEmail: '', studentAddress: '' };
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.studentService.getAll().subscribe(data => this.students = data);
  }

  saveStudent(): void {
    if (this.student.id) {
      this.studentService.update(this.student).subscribe(() => {
        this.getAllStudents();
        this.resetForm();
      });
    } else {
      this.studentService.create(this.student).subscribe(() => {
        this.getAllStudents();
        this.resetForm();
      });
    }
  }
  editStudent(s: Student): void {
    this.student = { ...s };
  }

  deleteStudent(id?: number): void {
    if (id && confirm("Are you sure to delete?")) {
      this.studentService.delete(id).subscribe(() => this.getAllStudents());
    }
  }

  resetForm(): void {
    this.student = { studentName: '', studentEmail: '', studentAddress: '' };
  }
}
