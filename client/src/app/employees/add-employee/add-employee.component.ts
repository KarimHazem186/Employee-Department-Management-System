import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../../models/employee';
import { Department } from '../../../../models/department';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
// employee: any;
// onSubmit() {
// throw new Error('Method not implemented.');
// }

employee: Employee = new Employee();
allDepartments: Department[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.httpClient.get<Department[]>('http://localhost:3000/departments/allDepartments')
      .subscribe((data) => this.allDepartments = data);
  }

  onSubmit() {
    this.httpClient.post<Employee>('http://localhost:3000/employees/addEmployee', this.employee)
      .subscribe(() => {
        this.router.navigate(['employees']);
      });
  }


}
