import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() postUrl: string;
  @Output() addModal: EventEmitter<any> = new EventEmitter();
  @Input() modalHeaderName: string;

  loading: boolean = false;
  errorMessage: string = "";
  showError: boolean = false;
  selectedFile: File;
  selectedFileName: string = "";
  form: FormGroup;
  alertPopup: any;
  alertPopupMessage: string = "";

  constructor(private pagesService: PagesService, private formBuilder: FormBuilder) {
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
  async addItem() {
    // Start loading
    this.loading = true

    var formData: any = new FormData();
    formData.append("name", this.form.get('name')!.value);
    formData.append("description", this.form.get('description')!.value);
    formData.append("images", this.form.get('images')!.value);
    formData.append("url", 'http//micheal.com');

    try {
      const result = await this.pagesService.addPage(formData, this.postUrl)

      // Set loading to false
      this.loading = false

      // Show alert message
      this.alertPopupMessage = result.message
      this.alertPopup = true

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

  // Close Add Modal
  closeAddModal() {
    this.addModal.emit();
  }

}
