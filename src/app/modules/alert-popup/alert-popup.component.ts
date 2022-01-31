import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.css']
})
export class AlertPopupComponent implements OnInit {

  @Input() alertPopupMessage: string;
  @Input() alertPopup: any;

  constructor() { }

  ngOnInit(): void {
  }

}
