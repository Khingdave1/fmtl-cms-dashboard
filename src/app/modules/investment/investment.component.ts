import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  postInvestmentUrl: string = 'https://first-marina-be.herokuapp.com/pages/add/investment';
  updateInvestmentUrl: string = 'https://first-marina-be.herokuapp.com/pages/update/investment';
  deleteInvestmentUrl: string = 'https://first-marina-be.herokuapp.com/pages/delete/investment';

  investment: any;
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
      this.investment = res.data.investment
    }, ((error: any) => {
      console.log(error)
    }))
  }

  // Open Add Modal
  openAddModal(title: any) {
    this.addModal = !this.addModal
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
