import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  hide: boolean = true;
  loading: boolean = false;
  returnUrl = '';
  isSignedin: boolean = false;
  errorMessage: string = "";
  showError: boolean = false;


  // body = { "email": "olawalejuwon@gmail.com", "password": "123456" }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl' || '/']

    if (localStorage.getItem('token') !== null) {
      this.isSignedin = true
    } else {
      this.isSignedin = false
    }

  }



  // Sign In
  signin(data: any) {
    // Set loading to true
    this.loading = true

    // Send users data
    this.profileService.signIn(data).subscribe((res: any) => {
      console.log(res)
      // Create Users Token and save to user's localStorage
      localStorage.setItem('token', (res.data?.token))
      // Navigate to Dashboard
      this.router.navigate(['dashboard'])
    }, ((error: any) => {
      console.log(error)
      // Show error message
      this.errorMessage = error.error.message
      this.showError = true
      // Set loading to false
      this.loading = false

      // Set Timeout
      // setTimeout(() => {
      //   this.showError = false
      // }, 3000);


    }))
  }

}
