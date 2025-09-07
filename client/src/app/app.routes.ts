import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeleteEmployeeComponent } from './employees/delete-employee/delete-employee.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { DepartmentDetailsComponent } from './departments/department-details/department-details.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './departments/delete-department/delete-department.component';


export const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"employees",component: EmployeesComponent},
  {path:"employees/add",component: AddEmployeeComponent},
  {path:"employees/details/:id",component: EmployeeDetailsComponent},
  {path:"employees/edit/:id",component: EditEmployeeComponent},
  {path:"employees/delete/:id",component: DeleteEmployeeComponent},

  {path:"departments",component: DepartmentsComponent},
  {path:"departments/add",component: AddDepartmentComponent},
  {path:"departments/details/:id",component:DepartmentDetailsComponent },
  {path:"departments/edit/:id",component:EditDepartmentComponent },
  {path:"departments/delete/:id",component:DeleteDepartmentComponent },


  {path:"**",component: PageNotFoundComponent},

];

