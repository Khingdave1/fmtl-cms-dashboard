import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() updateFinanceUrl: string;
  @Input() currentItem: any;
  @Output() editModal: EventEmitter<any> = new EventEmitter();

  loading: boolean = false;
  errorMessage: string = "";
  showError: boolean = false;
  alertPopupMessage: string = "";
  selectedFile: File;
  selectedFileName: string = "";
  form: FormGroup;
  editForm: FormGroup;
  alertPopup: any;

  constructor(private pagesService: PagesService, private formBuilder: FormBuilder) {
    // Edit form
    this.editForm = this.formBuilder.group({
      name: [''],
      description: ['']
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

  // Edit Finance
  editFinance(dataId: any) {
    // Set lloading to true
    this.loading = true

    let data = {
      name: this.editForm.get('name')!.value,
      description: this.editForm.get('description')!.value
    }

    console.log(data)
    this.pagesService.updateFinancePage(this.updateFinanceUrl, dataId, data).subscribe((res: any) => {
      console.log(res)

      //  Show message
      this.alertPopupMessage = res.message

      // Display message
      this.alertPopup = true

      // Set loading to false
      this.loading = false


      // Reload the page
      window.location.reload();
    }, ((error: any) => {
      console.log(error)
    }))
  }

  closeEditModal() {
    this.editModal.emit()
  }

}
