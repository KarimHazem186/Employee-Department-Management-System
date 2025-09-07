import { Component } from '@angular/core';
import { Department } from '../../../../models/department';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent {
  departmentId:any;
  department:Department=new Department()

  constructor(private httpClient:HttpClient,
    private activatedRoute:ActivatedRoute){}

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


}
