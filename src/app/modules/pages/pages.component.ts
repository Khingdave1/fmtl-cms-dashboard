import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  postFinanceUrl: string = 'https://first-marina-be.herokuapp.com/pages/add/finance';
  updateFinanceUrl: string = 'https://first-marina-be.herokuapp.com/pages/update/finance';
  deleteFinanceUrl: string = 'https://first-marina-be.herokuapp.com/pages/delete/finance';
  finance: any;
  alertPopupMessage: string = "";
  addModal: any;
  deleteModal: any;
  editModal: any;
  currentItem: any;
  alertPopup: any;

  constructor(private pagesService: PagesService) {

  }

  ngOnInit(): void {
    // Get data
    this.getData()
  }

  // Get Data
  getData() {
    // Send users data
    this.pagesService.getAllPages().subscribe((res: any) => {
      this.finance = res.data.finance
    }, ((error: any) => {
      console.log(error)
    }))
  }

  // Open Add Modal
  openAddModal() {
    this.addModal = !this.addModal
  }

  // Close Add Modal
  closeAddModal() {
    this.addModal = false
  }

  // Open Edit Modal
  openEditModal(dataId: any) {
    this.editModal = true
    this.currentItem = dataId
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
