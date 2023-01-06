import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { CustomSnackbarComponent } from './custom-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarService {

  constructor(private service: DesignUtilityService,
    private snackbar: MatSnackBar){

  }



  openSuccessnackBar(message: any, action: string){
    this.snackbar.openFromComponent(CustomSnackbarComponent, {
      data: {
        message: message,
        action: action,
        icon: 'done',
        snackbar: this.snackbar
      },
      panelClass: ['success-snackbar'],
    })

  }

  openErrornackBar(message: any, action: string, panelClass: string){
    console.log(panelClass)
    this.snackbar.openFromComponent(CustomSnackbarComponent, {
      data: {
        message: message,
        action: action,
        icon: 'report_problem',
        snackbar: this.snackbar, 
      },
      duration: 2000,
      panelClass: ['error-snackbar'],
      
      
      
    }
    )
    console.log()

  }
}
