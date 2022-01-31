import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactRequests: any;
  replyStatusMessage: string = "Pending!";
  replyStatus: any;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getData()
  }

  // Get Data
  getData() {
    // Send users data
    this.contactService.getAllPages().subscribe((res: any) => {
      this.contactRequests = res.data

      // Get Replied status
      this.contactRequests.forEach((i: any) => {
        let item = i.replied
        this.replyStatus = item
      })

      // Set value to replyStatusMessage if replyStatus is true
      if (this.replyStatus == true) {
        this.replyStatusMessage = "Replied!"
      }

    }, ((error: any) => {
      console.log(error)
    }))
  }

}
