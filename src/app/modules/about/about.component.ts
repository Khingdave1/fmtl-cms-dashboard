import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PagesService } from 'src/app/services/pages.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  postTeamUrl: string = 'https://first-marina-be.herokuapp.com/about/team';
  updateTeamUrl: string = 'https://first-marina-be.herokuapp.com/about/team';
  deleteTeamUrl: string = 'https://first-marina-be.herokuapp.com/about/team';
  team: any;
  board: any;
  addModal: boolean = false;
  deleteModal: boolean = false;
  editModal: boolean = false;
  currentItem: any;
  modalHeaderName: string = "";


  loading: boolean = false;
  errorMessage: string = "";
  showError: boolean = false;
  selectedFile: File;
  selectedFileName: string = "";
  form: FormGroup;
  alertPopup: any;
  alertPopupMessage: string = "";

  constructor(private pagesService: PagesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Get data
    this.getData()

    // Form
    this.form = this.formBuilder.group({
      name: [''],
      position: [''],
      images: [null]
    })
  }

  // Get Data
  getData() {
    // Send users data
    this.pagesService.getAllTeam().subscribe((res: any) => {
      // this.team = res.data
      this.team = []
      this.board = []

      res.data.forEach((r: any) => {
        // If Designation is Team
        if (r.designation == 'team') {
          this.team.push(r)
        } else {
          this.board.push(r)
          console.log(this.board)
        }

      });
    }, ((error: any) => {
      console.log(error)
    }))
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
  async addItem() {
    // Start loading
    this.loading = true

    var formData: any = new FormData();
    formData.append("name", this.form.get('name')!.value);
    formData.append("position", this.form.get('position')!.value);
    formData.append("images", this.form.get('images')!.value);
    formData.append("handles", 'facebook: "www.fb.me"');
    formData.append("designation", 'team');

    try {
      const result = await this.pagesService.addPage(formData, this.postTeamUrl)

      // Set loading to false
      this.loading = false

      // Show alert message
      this.alertPopupMessage = result.message
      this.alertPopup = true

      // Reload the page
      // window.location.reload();

    } catch (error: any) {
      console.log(error)
      //  Show error message
      this.errorMessage = error.message

      // Display error
      this.showError = true

      // Set loading to false
      this.loading = false
    }
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

}
