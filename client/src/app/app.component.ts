import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employees/delete-employee/delete-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,EmployeesComponent,AddEmployeeComponent,EditEmployeeComponent,DeleteEmployeeComponent,FormsModule,RouterOutlet,RouterLink,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
