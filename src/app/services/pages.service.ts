import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  httpOptions: any;
  getUrl = 'https://first-marina-be.herokuapp.com/pages'
  postFinanceUrl = 'https://first-marina-be.herokuapp.com/pages/add/finance'
  updateFinanceUrl = 'https://first-marina-be.herokuapp.com/pages/update/finance'
  deleteFinanceUrl = 'https://first-marina-be.herokuapp.com/pages/delete/finance'
  token = localStorage.getItem('token')

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
  }

  // Get All Pages
  getAllPages() {
    return this.http.get(this.getUrl, this.httpOptions)
  }

  // Get Finance Page
  async addFinancePage(data: any) {
    try {
      const r = await fetch(this.postFinanceUrl, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.token,
          // "Content-Type": "multipart/form-data",
        },
        body: data,
      });
      const result = await r.json()
      if (result.success == true) {
        return result
      } else {
        throw new Error(result.message)
      }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  // Update Finance page
  updateFinancePage(dataId: any, payload: any) {
    return this.http.put(this.updateFinancePage + "/" + dataId, payload, this.httpOptions)
  }
  // Delete Finance page
  deleteFinancePage(dataId: any) {
    return this.http.delete(this.deleteFinanceUrl + "/" + dataId, this.httpOptions)
  }


}
