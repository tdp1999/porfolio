import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioItemComponent } from './porfolio-item.component';



@NgModule({
  declarations: [
    PorfolioItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PorfolioItemComponent
  ]
})
export class PorfolioItemModule { }
