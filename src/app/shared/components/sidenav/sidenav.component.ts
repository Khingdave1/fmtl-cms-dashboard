import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Log the user out
  logOut() {
    // Return to Home page
    localStorage.removeItem('token')

    // Navigate to Dashboard
    this.router.navigate(['/'])
  }

}
