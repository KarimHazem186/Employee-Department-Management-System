import { HttpClient } from '@angular/common/http';
import { Component,inject } from '@angular/core';
import  {Employee}  from "../../../models/employee"
import { RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  httpClient=inject(HttpClient);
  allEmployees:Employee[]=[];
  searchText:string[] = [];
onSubmit: any;
employee: any;
  getAllEmployees() {
    return this.httpClient.get<Employee[]>
    ('http://localhost:3000/employees/allEmployees');
 }
  ngOnInit() {
    this.getAllEmployees().subscribe((data)=>{
      this.allEmployees=data
    });
  }

  search() {
    if (this.searchText[0] !== undefined && this.searchText.length > 0 && this.searchText[0].trim() !== '') {
      this.httpClient.get<Employee[]>('http://localhost:3000/employees/searchEmployee?firstName=' + this.searchText[0] /*+ '&lastName='+this.searchText[0]*/)
      .subscribe((data)=>{this.allEmployees=data})
    }else{
      this.getAllEmployees().subscribe((data)=>{this.allEmployees=data})
    }
  }


}
