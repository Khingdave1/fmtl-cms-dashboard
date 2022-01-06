import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData: any

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getUser()

  }
  getUser() {
    this.profileService.getUser().subscribe((res: any) => {
      this.userData = []
      this.userData = res.data.user

      console.log(this.userData)
    })
  }
}
