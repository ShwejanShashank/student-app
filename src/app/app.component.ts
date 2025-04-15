import { Component } from '@angular/core';
import {StudentComponent} from './components/student/student.component';

@Component({
  selector: 'app-root',
  imports: [
    StudentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-app';
}
