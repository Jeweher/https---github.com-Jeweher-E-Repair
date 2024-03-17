import { Component, OnInit } from '@angular/core';
import { SideNavToggle } from '../side-nav/side-nav/sidebarToggle';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
  isSideNavCollapsed = false ;
  screenWidth = 0;
  onToggleSideNav(data:SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
    this.getBodyClass();
  }
  getBodyClass():String{
    
    let styleClass='';
    if(this. isSideNavCollapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    }else if (this. isSideNavCollapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen'
    }
    return styleClass ;
  }
  ngOnInit(): void {
    this.getBodyClass();
  }




  // public dialogOpened = false;
  // public windowOpened = false;
  // [key: string]: boolean;

  // public close(component: string): void {
  //   this[component + "Opened"] = false;
  // }

  // public open(component: string): void {
  //   this[component + "Opened"] = true;
  // }
  // public close(component: 'dialog' | 'window'): void {
  //   if (component === 'dialog') {
  //     this.dialogOpened = false;
  //   } else if (component === 'window') {
  //     this.windowOpened = false;
  //   }
  // }
  
  // public open(component: 'dialog' | 'window'): void {
  //   if (component === 'dialog') {
  //     this.dialogOpened = true;
  //   } else if (component === 'window') {
  //     this.windowOpened = true;
  //   }
  // }

  // public action(status: string): void {
  //   console.log(`Dialog result: ${status}`);
  //   this.dialogOpened = false;
  // }

  // public opened = true;
  // public dataSaved = false;

  // public close(): void {
  //   this.opened = false;
  // }

  // public open(): void {
  //   this.opened = true;
  // }

  // public submit(): void {
  //   this.dataSaved = true;
  //   this.close();
  // }

  public opened = false;

  public close(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
}
}
