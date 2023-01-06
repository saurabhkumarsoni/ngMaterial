import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-toggle-buttons',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.scss']
})
export class ToggleButtonsComponent implements OnInit {
  fontStyleControl = new FormControl('');
  fontStyle?: any;

  ngOnInit(){}


  onSingleButtonToggle(val: any){
    console.log('get Btn Value', val.source.checked)
  }

  onSelectAligment(event: any){
    console.log('get toogle group value', event.value)
  }

}
