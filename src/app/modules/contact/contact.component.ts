import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  replyModal: any;
  deleteModal: any;
  currentItem: any;

  deleteUrl: string = 'https://first-marina-be.herokuapp.com/contact/requests';

  contactRequests: any;
  replyStatusMessage: string = "No response";
  replyStatus: any;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getData()
  }

  // Open Add Modal
  openReplyModal(dataId: any) {
    this.replyModal = true
    // Push dataId to currentItem
    this.currentItem = dataId
  }

  // Close Add Modal
  closeReplyModal() {
    this.replyModal = false
  }

  // Get Data
  getData() {
    // Send users data
    this.contactService.getAllPages().subscribe((res: any) => {
      this.contactRequests = res.data
      console.log(this.contactRequests)

      // Get Replied status
      // this.contactRequests.forEach((i: any) => {
      //   let item = i.replied
      //   this.replyStatus = item
      //   // Set value to replyStatusMessage if replyStatus is true
      //   if (this.replyStatus == true) {
      //     this.replyStatusMessage = "Replied!"
      //   }
      // })


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

}
