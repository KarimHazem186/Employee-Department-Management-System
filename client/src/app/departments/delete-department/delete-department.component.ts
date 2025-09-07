import { Component } from '@angular/core';
import { Employee } from '../../../../models/employee';
import { Department } from '../../../../models/department';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-delete-department',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './delete-department.component.html',
  styleUrl: './delete-department.component.css'
})
export class DeleteDepartmentComponent {
  departmentId:any;
  department:Department=new Department()


  constructor(private httpClient:HttpClient,
    private activatedRoute:ActivatedRoute,private router:Router){}

  getDepartment(){
  this.departmentId=this.activatedRoute.snapshot.params['id']
  return this.httpClient.get<Department>
  ("http://localhost:3000/departments/singleDepartment/"+
    this.departmentId)
  }


  ngOnInit(){
    this.getDepartment().subscribe((data)=>{
      this.department=data;
      })
  }

  delete(){
      this.httpClient.delete<Department>
      ('http://localhost:3000/departments/deleteDeparment/'+this.departmentId)
      .subscribe(()=>{this.router.navigate(['departments'])});
  }

}
