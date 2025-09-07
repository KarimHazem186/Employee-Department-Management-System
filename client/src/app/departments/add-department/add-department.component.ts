import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from '../../../../models/department';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from '../../../../models/employee';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  department: Department = new Department();
  // allEmployees: Employee[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  // ngOnInit() {
  //   this.httpClient.get<Employee[]>('http://localhost:3000/employees/allEmployees')
  //     .subscribe((data) => this.allEmployees = data);
  // }

  onSubmit() {
    this.httpClient.post<Department>('http://localhost:3000/departments/addDepartment', this.department)
      .subscribe(() => {
        this.router.navigate(['departments']);
      });
  }

}
