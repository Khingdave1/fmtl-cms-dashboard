import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  @Input() replyUrl: string;
  @Input() currentItem: any;
  @Output() replyModal: EventEmitter<any> = new EventEmitter();

  modalHeadermessage: string = "";


  loading: boolean = false;
  errorMessage: string = "";
  showError: boolean = false;
  form: FormGroup;
  alertPopup: any;
  alertPopupMessage: string = "";

  constructor(private pagesService: PagesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // Form
    this.form = this.formBuilder.group({
      message: ['']
    })
  }

  // Close Add Modal
  closeReplyModal() {
    this.replyModal.emit()
  }


  // Post Data
  async replyMessage() {
    // Start loading
    this.loading = true

    var formData: any = new FormData();
    formData.append("message", this.form.get('message')!.value);

    try {
      const result = await this.pagesService.replyPage(formData, this.replyUrl)

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


}
