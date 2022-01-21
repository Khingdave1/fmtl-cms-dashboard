import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  postUrl = 'https://first-marina-be.herokuapp.com/users/appLogin'
  getUrl = 'https://first-marina-be.herokuapp.com/users/auth'

  constructor(
    private http: HttpClient
  ) {
  }




  // Sign In
  signIn(data: any) {
    return this.http.post(this.postUrl, data)
  }

  // Get Users Data
  getUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }
    return this.http.get(this.getUrl, httpOptions)
  }


}
