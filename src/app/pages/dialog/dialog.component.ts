import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DesignUtilityModule } from 'src/app/appModules/design-utility.module';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { PromptComponent } from 'src/app/includes/utilities/popups/prompt/prompt.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Dialog2Component } from './dialog2/dialog2.component';

export interface Section {
  name: string;
  updated: Date;
}
export interface Unit {
  name: string;
  cityName: string;
  photoUrl: string;
  usersCount: string;
  ceo?: string;
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog, private service: DesignUtilityService) {}

  openDialog() {
   this.dialog.open(Dialog1Component,{
    // width: '100%',
    // width: '300px',
    // minWidth: '500px',
    // maxWidth: '200px',
    // height: '200px',
    // maxHeight: '300px',
    // minHeight: '400px'
    // hasBackdrop: false
    disableClose: true

   }).afterClosed().subscribe((res) =>{
    console.log('open dialog response',res);

    if (res == 'Install'){
      console.log('open dialog response',res);
    }
   })
  }

  openDialog1(){
    this.dialog.open(Dialog2Component, {
      data: this.name,
    }).afterClosed().subscribe(res =>{
      console.log('data from dailog', res);
      this.animal = res;
    })

  }


  //
  promptResult!: boolean;
  promptTitle!: string;
  promptText!: string;
  openDialog2(){
    const data = {
      title: this.promptTitle,
      text: this.promptText
    }
    this.service.openPrompt(data).subscribe(res =>{
      console.log('response inside diaglog', res);
      this.promptResult = res;
    })

  }

  list = [
    {icon: 'account_circle', active: true, name: 'Saurabh', dob: new Date()},
    {icon: 'account_circle', active: true, name: 'Sonali', dob: '24/06/1992'},
    {icon: 'account_circle', active: true, name: 'Suman', dob: '24/06/1992'},
    {icon: 'account_circle', active: true, name: 'Surabhi', dob: '24/06/1992'},
    {icon: 'account_circle', active: true, name: 'Sandhya', dob: '24/06/1992'}
  ]

 

  onDelete(index: number){
    let data = {
      title: `Delete ${this.list[index].name}`,
      text: `Do yoy want to delete this member?`
    }

    this.service.openPrompt(data).subscribe(res =>{
      if(res){
        this.list.splice(index, 1);
      }
    })
  }


}
