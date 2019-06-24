import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloodbankRoutingModule } from './bloodbank-routing.module';
import { GroupDirectoryComponent } from './group-directory/group-directory.component';

@NgModule({
  declarations: [GroupDirectoryComponent],
  imports: [
    CommonModule,
    BloodbankRoutingModule
  ]
})
export class BloodbankModule { }
