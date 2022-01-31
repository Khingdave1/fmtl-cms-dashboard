import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData: any;
  @Output() hamClick: EventEmitter<any> = new EventEmitter();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getUser()

  }
  // Get User data
  getUser() {
    this.profileService.getUser().subscribe((res: any) => {
      this.userData = []
      this.userData = res.data.user
    })
  }

  // Open Menu
  openMenu() {
    this.hamClick.emit()
  }
  // Close Menu
  // closeMenu() {
  //   this.hamClick = false
  // }
}
