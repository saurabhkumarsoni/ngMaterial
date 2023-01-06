import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { CustomSnackbarService } from 'src/app/includes/utilities/custom-snackbar/custom-snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class SnackbarComponent {

  constructor(private service: DesignUtilityService,
    public cusSnackbar: CustomSnackbarService
    ){

  }

  openCustomSnackBar(message: string, action: string, type: string){
    if(type === 'success'){
    this.cusSnackbar.openSuccessnackBar(message, action)
    } else if(type === 'error'){
      this.cusSnackbar.openErrornackBar(message, action, type)
    }
    }

 

}
