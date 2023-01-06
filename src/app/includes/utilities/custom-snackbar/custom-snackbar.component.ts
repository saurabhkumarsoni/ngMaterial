import {Component, Inject} from '@angular/core';
import {MatSnackBarRef, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss']
})
export class CustomSnackbarComponent {

  constructor( public snackBarRef: MatSnackBarRef<CustomSnackbarComponent>,@Inject(MAT_SNACK_BAR_DATA) public data: any){}

  closeSnackbar(){
    this.data.snackbar.dismiss()
  }

}
