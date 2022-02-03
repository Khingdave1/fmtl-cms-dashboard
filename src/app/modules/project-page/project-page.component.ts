import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  projects: any;
  postUrl: string = 'https://first-marina-be.herokuapp.com/pages/add/project';
  updateProjectUrl: string = 'https://first-marina-be.herokuapp.com/pages/update/project';
  deleteProjectUrl: string = 'https://first-marina-be.herokuapp.com/pages/delete/project';

  addModal: boolean = false;
  deleteModal: boolean = false;
  editModal: boolean = false;
  currentItem: any;
  modalHeaderName: string = "";

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
    // Get data
    this.getData()
  }

  // Get Data
  getData() {
    // Send users data
    this.pagesService.getAllPages().subscribe((res: any) => {
      this.projects = res.data.project
    }, ((error: any) => {
      console.log(error)
    }))
  }
  // Open Add Modal
  openAddModal(title: any) {
    this.addModal = true
    // Set Modal name
    this.modalHeaderName = title
  }

  // Close Add Modal
  closeAddModal() {
    this.addModal = false
  }

  // Open Edit Modal
  openEditModal(dataId: any, title: any) {
    this.editModal = true
    // Push dataId to currentItem
    this.currentItem = dataId
    // Set Modal name
    this.modalHeaderName = title
  }

  // Close Edit Modal
  closeEditModal() {
    this.editModal = false
  }

  // Open Delete Modal
  openDeleteModal(dataId: any) {
    this.deleteModal = true
    this.currentItem = dataId
  }

  // Close Delete Modal
  closeDeleteModal() {
    this.deleteModal = false
  }

}
