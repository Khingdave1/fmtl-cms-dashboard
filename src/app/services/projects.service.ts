import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  getUrl = 'https://first-marina-be.herokuapp.com/pages'
  postProjectUrl = 'https://first-marina-be.herokuapp.com/pages/add/project'
  updateProjectUrl = 'https://first-marina-be.herokuapp.com/pages/add/finance'
  deleteProjectUrl = 'https://first-marina-be.herokuapp.com/pages/add/finance'
  token = localStorage.getItem('token')

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
  async addProjectPage(data: any) {
    try {
      const r = await fetch(this.postProjectUrl, {
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

}
