import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  finance: any;
  loading: boolean = false;
  errorMessage: string = "";
  showError: boolean = false;
  alertPopupMessage: string = "";
  selectedFile: File;
  selectedFileName: string = "";
  modal: any;
  deleteModal: any;
  editModal: any;
  form: FormGroup;
  currentItem: any;
  alertPopup: any;

  constructor(private pagesService: PagesService, private formBuilder: FormBuilder) {
    // Form
    this.form = this.formBuilder.group({
      name: [''],
      description: [''],
      images: [null]
    })
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

  // File selection
  onFileSelect(event: any) {
    const file = <File>event.target.files[0]
    this.selectedFileName = file.name

    this.form.patchValue({
      images: file
    });
    this.form.get('images')!.updateValueAndValidity()
  }

  // Post Data
  async addFinance() {
    // Start loading
    this.loading = true

    var formData: any = new FormData();
    formData.append("name", this.form.get('name')!.value);
    formData.append("description", this.form.get('description')!.value);
    formData.append("images", this.form.get('images')!.value);
    formData.append("url", 'http//micheal.com');

    try {
      const result = await this.pagesService.addFinancePage(formData)
      //  Show error message
      this.alertPopupMessage = result.message
      // Add green color to Message
      document.getElementById('message')?.classList.add('green-color')
      // Display error
      // this.showError = true
      this.alertPopup = true

      // Set loading to false
      this.loading = false


      // Reload the page
      window.location.reload();

    } catch (error: any) {
      console.log(error)
      //  Show error message
      this.errorMessage = error.message
      // Add red color to Message
      document.getElementById('message')?.classList.add('red-color')
      // Display error
      this.showError = true

      // Set loading to false
      this.loading = false
    }
  }

  // Delete Finance
  deleteFinance(dataId: any) {
    this.pagesService.deleteFinancePage(dataId).subscribe((res: any) => {
      console.log(res.message)

      // Reload the page
      window.location.reload();

      this.alertPopupMessage = res.message

      this.alertPopup = true


      // Set Timeout
      setTimeout(() => {
        this.alertPopup = false;
      }, 5000);

    }, ((error: any) => {
      console.log(error)
    }))
  }

  // Edit Finance
  editFinance(dataId: any) {
    let data = {
      name: 'Update',
      description: 'Updated!!!'
    }
    this.pagesService.updateFinancePage(dataId, data).subscribe((res: any) => {
      console.log(res)
    }, ((error: any) => {
      console.log(error)
    }))
  }

  // Open Modal
  openModal() {
    this.modal = !this.modal
  }

  // Open Delete Modal
  openDeleteModal(dataId: any) {
    this.deleteModal = true
    this.currentItem = dataId
  }
  // Open Delete Modal
  openEditModal(dataId: any) {
    this.editModal = true
    this.currentItem = dataId
  }


}
