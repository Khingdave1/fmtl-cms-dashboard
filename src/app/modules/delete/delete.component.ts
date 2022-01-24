import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() deleteFinanceUrl: string;
  @Input() currentItem: any;
  @Output() deleteModal: EventEmitter<any> = new EventEmitter();


  alertPopupMessage: string = "";
  alertPopup: any;

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  // Delete Finance
  deleteFinance(dataId: any) {
    this.pagesService.deleteFinancePage(this.deleteFinanceUrl, dataId).subscribe((res: any) => {
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

  // Close Delet Modal
  closeDeleteModal() {
    this.deleteModal.emit()
  }

}
