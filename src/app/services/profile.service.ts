import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'https://first-marina-be.herokuapp.com/users/appLogin'

  constructor(
    private http: HttpClient
  ) {
  }




  // Sign In
  signIn(data: any) {
    return this.http.post(this.url, data)
  }

  // Get Users Data
  getUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }
    return this.http.get('http://first-marina-be.herokuapp.com/users/auth', httpOptions)
  }


}
