import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptComponent } from '../includes/utilities/popups/prompt/prompt.component';
import { AngularMaterialModule } from './material.module';
import { CustomSnackbarComponent } from '../includes/utilities/custom-snackbar/custom-snackbar.component';



@NgModule({
  declarations: [PromptComponent, CustomSnackbarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    PromptComponent,
    CustomSnackbarComponent
  ]
})
export class DesignUtilityModule { }
