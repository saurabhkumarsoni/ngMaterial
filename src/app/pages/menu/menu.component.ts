import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  @ViewChild('menu2Button') trigger!: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }


  ngOnInit(): void {
    setTimeout(() =>{
      this.someMethod();
    }, 2000)
  }

}
