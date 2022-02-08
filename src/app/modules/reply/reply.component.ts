import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  replyUrl = 'https://first-marina-be.herokuapp.com/contact/requests/reply';
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
      subject: [''],
      message: ['']
    })
  }

  // Close Add Modal
  closeReplyModal() {
    this.replyModal.emit()
  }


  // Post Data
  replyMessage(dataId: any, replyTo: any) {
    // Set lloading to true
    this.loading = true

    let data = {
      replyTo: replyTo,
      subject: this.form.get('subject')!.value,
      html: this.form.get('message')!.value
    }

    this.pagesService.yesPage(this.replyUrl, dataId, data).subscribe((res: any) => {
      console.log(res)

      // Set loading to false
      this.loading = false

      // Show alert message
      this.alertPopupMessage = res.message
      this.alertPopup = true

      // Reload the page
      window.location.reload();

    }, ((error: any) => {
      console.log(error)
      //  Show error message
      this.errorMessage = error.error.message

      // Display error
      this.showError = true

      // Set loading to false
      this.loading = false
    }))
  }


}
