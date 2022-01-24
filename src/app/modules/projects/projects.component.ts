import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

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
  editForm: FormGroup;
  currentItem: any;
  alertPopup: any;

  constructor(private projectService: ProjectsService, private formBuilder: FormBuilder) {

    // Form
    this.form = this.formBuilder.group({
      name: [''],
      description: [''],
      images: [null]
    })
  }

  ngOnInit(): void {
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
      const result = await this.projectService.addProjectPage(formData)
      //  Show message
      this.alertPopupMessage = result.message

      // Display message
      this.alertPopup = true

      // Set loading to false
      this.loading = false


      // Reload the page
      window.location.reload();

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

}
