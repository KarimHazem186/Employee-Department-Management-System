import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../../models/employee';
import { Department } from '../../../../models/department';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit  {
  employeeId:any;
  employee : Employee=new Employee();
  allDepartments:Department[]=[]

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.employeeId = this.activatedRoute.snapshot.params['id'];
    this.httpClient.get<Employee>('http://localhost:3000/employees/singleEmployee/' + this.employeeId)
      .subscribe((data) => { this.employee = data; });
    this.httpClient.get<Department[]>('http://localhost:3000/departments/allDepartments')
      .subscribe((data) => { this.allDepartments = data; });
  }

  onSubmit() {
    this.httpClient.put('http://localhost:3000/employees/updateEmployee/' + this.employeeId, this.employee)
      .subscribe(() => { this.router.navigate(['employees']); });
  }

}
