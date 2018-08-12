import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allGuards } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ...allGuards
  ]
})
export class GuardsModule { }
