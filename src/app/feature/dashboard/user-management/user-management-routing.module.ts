import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserManagementComponent} from './user-management.component';
import {CreateUserComponent} from './create-user/create-user.component';

const routes: Routes = [
  {
    path : '',
    component : UserManagementComponent
  },
  {
    path : 'create-user',
    component : CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
