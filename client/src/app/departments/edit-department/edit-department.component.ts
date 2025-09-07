import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from '../../../../models/department';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-department',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.css'
})
export class EditDepartmentComponent {
  departmentId: any;
  department: Department = new Department();

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {}



  ngOnInit() {
    this.departmentId = this.activatedRoute.snapshot.params['id'];
    this.httpClient.get<Department>('http://localhost:3000/departments/singleDepartment/' + this.departmentId)
      .subscribe((data) => { this.department = data; });
  }
  onSubmit() {
    this.httpClient.put('http://localhost:3000/departments/updateDeparment/' + this.departmentId, this.department)
      .subscribe(() => { this.router.navigate(['departments']);
    });
  }
}
