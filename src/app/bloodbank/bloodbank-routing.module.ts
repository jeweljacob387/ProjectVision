import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupDirectoryComponent } from './group-directory/group-directory.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GroupDirectoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloodbankRoutingModule { }
