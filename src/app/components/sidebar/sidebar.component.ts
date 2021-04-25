import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }
  brandId:string="";
  colorId:string="";

  ngOnInit(): void {
  }

  currentBrandId(event:any){
    this.brandId=event;
  }

  currentColorId(event:any){
    this.colorId=event;
  }

  setRoute(){
    if(this.brandId && this.colorId){
      this.router.navigate(['cars/brands/'+this.brandId+'/colors/'+this.colorId]);
    }
    else if(this.brandId){
      this.router.navigate(['cars/brands/'+this.brandId]);
    }
    else if(this.colorId){
      this.router.navigate(['cars/colors/'+this.colorId]);
    }
    else{
      this.router.navigate(['cars/']);
    }
  }

  clearRoute(){
    this.router.navigate(['cars/']);
  }

}