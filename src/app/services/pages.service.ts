import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  httpOptions: any;
  getPagesUrl = 'https://first-marina-be.herokuapp.com/pages';
  getTeamUrl = 'https://first-marina-be.herokuapp.com/about/team';
  getProjectsUrl = 'https://first-marina-be.herokuapp.com/projects';
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
    return this.http.get(this.getPagesUrl, this.httpOptions)
  }

  // Get all Teams
  getAllTeam() {
    return this.http.get(this.getTeamUrl, this.httpOptions)
  }
  // Get all Teams
  getAllProjects() {
    return this.http.get(this.getProjectsUrl, this.httpOptions)
  }

  // Add Finance Page
  async addPage(data: any, postUrl: any) {
    try {
      const r = await fetch(postUrl, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.token,
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

  // Add Reply Message
  async replyPage(data: any, replyUrl: any) {
    try {
      const r = await fetch(replyUrl, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.token,
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
  updatePage(updateUrl: any, dataId: any, payload: any) {
    return this.http.put(updateUrl + "/" + dataId, payload, this.httpOptions)
  }

  // Delete Finance page
  deletePage(deleteUrl: any, dataId: any) {
    return this.http.delete(deleteUrl + "/" + dataId, this.httpOptions)
  }


}
