import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
count: number = 0

  ngOnInit(): void {
    
  }

  constructor(private service: DesignUtilityService){}


  onAdd(){
    this.count = this.count + 1;
    this.service.cartCount.next(this.count)

  }

  onRemove(){
    this.count = this.count - 1;
    this.service.cartCount.next(this.count)

  }

}
