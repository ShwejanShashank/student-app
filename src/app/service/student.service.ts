import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8081/api/students';
  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiUrl);
  }

  getById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.apiUrl}/${id}`);
  }

  create(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.apiUrl, student);
  }

  update(student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.apiUrl}/${student.id}`, student);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

}
