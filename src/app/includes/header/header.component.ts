import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { PromptComponent } from '../utilities/popups/prompt/prompt.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount!: number;




  ngOnInit(): void {
    
  }

  constructor(private service: DesignUtilityService, 
    ){
      
    this.service.cartCount.subscribe((res) =>{
      this.cartCount =res;
      console.log('this.cartCount', this.cartCount)
    })
  }

  onLogOut(){
    const data = {
      title: 'Log Out',
      text: 'Are you sure for Log Off'
    }
    this.service.openPrompt(data).subscribe((res) =>{
      console.log('from header component', res)
    })
  }
}
