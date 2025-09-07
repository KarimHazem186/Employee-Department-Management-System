import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Employee } from '../../../../models/employee';
import { HttpClient } from '@angular/common/http';
import { Department } from '../../../../models/department';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  employeeId:any;
  employee:Employee=new Employee()
  department:Department = new Department()


  constructor(private httpClient:HttpClient,
    private activatedRoute:ActivatedRoute){}

  getEmployee(){
  this.employeeId=this.activatedRoute.snapshot.params['id']
  return this.httpClient.get<Employee>
  ("http://localhost:3000/employees/singleEmployee/"+
    this.employeeId)
  }

  getDepartment(){
    return this.httpClient.get<Department>('http://localhost:3000/departments/singleDepartment/'+this.employee.departmentId)
  }

  ngOnInit(){
    this.getEmployee().subscribe((data)=>{
      this.employee=data;
      this.getDepartment().subscribe((data)=>{this.department=data})
      })
  }

}
