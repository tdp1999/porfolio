import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsItemComponent } from './stats-item.component';



@NgModule({
  declarations: [
    StatsItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatsItemComponent
  ]
})
export class StatsItemModule { }
