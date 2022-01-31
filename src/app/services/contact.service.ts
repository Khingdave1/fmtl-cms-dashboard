import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './pages.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  httpOptions: any;
  getContactUrl = 'https://first-marina-be.herokuapp.com/contact/requests';
  token = localStorage.getItem('token')

  constructor(private http: HttpClient, private pageService: PagesService) {
    this.httpOptions = this.pageService.httpOptions
  }

  // Get All Pages
  getAllPages() {
    return this.http.get(this.getContactUrl, this.httpOptions)
  }
}
