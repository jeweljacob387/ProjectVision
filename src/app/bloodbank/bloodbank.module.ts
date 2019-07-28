import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { BloodbankRoutingModule } from './bloodbank-routing.module';
import { GroupDirectoryComponent } from './group-directory/group-directory.component';
import { AddNewDonorComponent } from './add-new-donor/add-new-donor.component';

@NgModule({
  declarations: [GroupDirectoryComponent, AddNewDonorComponent],
  imports: [
    CommonModule,
    BloodbankRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class BloodbankModule { }
