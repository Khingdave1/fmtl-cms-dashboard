import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() deleteUrl: string;
  @Input() currentItem: any;
  @Output() deleteModal: EventEmitter<any> = new EventEmitter();

  alertPopupMessage: string = "";
  alertPopup: any;

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
    console.log(this.currentItem)
  }

  // Delete Finance
  deleteItem(dataId: any) {
    this.pagesService.deletePage(this.deleteUrl, dataId).subscribe((res: any) => {
      console.log(res.message)

      // Show alert message
      this.alertPopupMessage = res.message

      this.alertPopup = true

      // Reload the page
      window.location.reload();

      // Set Timeout
      setTimeout(() => {
        this.alertPopup = false;
      }, 5000);

    }, ((error: any) => {
      console.log(error)
    }))
  }

  // Close Delet Modal
  closeDeleteModal() {
    this.deleteModal.emit()
  }

}
