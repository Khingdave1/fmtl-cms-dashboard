import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('sideNav') sideNav: ElementRef;
  @ViewChild('menuBtn') menuBtn: ElementRef;


  hamClick: any;
  userId: any;
  users: any;
  user: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // Click Outside to close element
    this.renderer.listen('window', 'click', (e: Event) => {
      let x = !this.sideNav.nativeElement.contains(e.target)
      let y = !this.menuBtn.nativeElement.contains(e.target)
      if (x && y) {
        this.hamClick = false;
      }
    });
  }

  // Open Menu
  openMenu() {
    this.hamClick = !this.hamClick
  }

}
