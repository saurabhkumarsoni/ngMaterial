import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AngularMaterialModule } from 'src/app/appModules/material.module';




@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class MainModule { }
