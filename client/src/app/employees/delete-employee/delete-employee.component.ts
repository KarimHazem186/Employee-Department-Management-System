import { Component } from '@angular/core';
import { Employee } from '../../../../models/employee';
import { Department } from '../../../../models/department';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent {
  employeeId:any;
  employee:Employee=new Employee()
  department:Department=new Department()

  constructor(private httpClient:HttpClient,
    private activatedRoute:ActivatedRoute,private router:Router){}

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


      delete(){
        this.httpClient.delete<Employee>
        ('http://localhost:3000/employees/deleteEmployee/'+this.employeeId)
        .subscribe(()=>{this.router.navigate(['employees'])});
    }

}
