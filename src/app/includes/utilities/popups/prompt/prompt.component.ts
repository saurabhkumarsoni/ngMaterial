import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, promptData } from 'src/app/pages/dialog/dialog2/dialog2.component';






@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: promptData,){

  }


  ngOnInit(): void {
  }

}
