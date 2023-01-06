import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { PromptComponent } from '../includes/utilities/popups/prompt/prompt.component';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  cartCount = new BehaviorSubject<number>(0)

  constructor(public dialog: MatDialog) { }


  // open prompt

  openPrompt(promptData: any){
    return this.dialog.open(PromptComponent, {
      data: promptData
    }).afterClosed()
  }
}
