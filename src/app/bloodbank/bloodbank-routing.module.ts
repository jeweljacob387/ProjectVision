import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupDirectoryComponent } from './group-directory/group-directory.component';
import { AddNewDonorComponent } from './add-new-donor/add-new-donor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GroupDirectoryComponent
  },
  {
    path: 'add',
    component: AddNewDonorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloodbankRoutingModule { }
