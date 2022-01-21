import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  getUrl = 'https://first-marina-be.herokuapp.com/pages'
  postFinanceUrl = 'https://first-marina-be.herokuapp.com/pages/add/finance'

  constructor(private http: HttpClient) { }

  // Get All Pages
  getAllPages() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }
    return this.http.get(this.getUrl, httpOptions)
  }

  // Get Finance Page
  addFinancePage(data: any) {
    console.warn(data)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }
    return this.http.post(this.postFinanceUrl, data, httpOptions)
  }

}
