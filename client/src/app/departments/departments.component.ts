import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Department } from '../../../models/department';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {
  httpClient = inject(HttpClient);
  searchText:string[] = [];
  allDepartments:Department[]=[];
  getAllDepartments() {
    return this.httpClient.get<Department[]>
     ('http://localhost:3000/departments/allDepartments');
  }

  ngOnInit() {
    this.httpClient.get<Department[]>('http://localhost:3000/departments/allDepartments')
      .subscribe((data) => this.allDepartments = data);
  }

  search() {
    if (this.searchText[0] !== undefined && this.searchText.length > 0 && this.searchText[0].trim() !== '') {
      this.httpClient.get<Department[]>('http://localhost:3000/departments/searchDepatrment?name=' + this.searchText[0] + '&description='+this.searchText[0])
      .subscribe((data)=>{this.allDepartments=data})
    }else{
      this.getAllDepartments().subscribe((data)=>{this.allDepartments=data})
    }
  }


}
