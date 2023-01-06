import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  animal: string;
}

export interface promptData {
  title: string;
  text: string;
}

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.scss']
})
export class Dialog2Component implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,){}

  onNoClick(){

  }

  ngOnInit(): void {
    console.log(this.data)
  }


  

}


