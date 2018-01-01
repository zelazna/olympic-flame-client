import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss']
})
export class MenuModalComponent implements OnInit {
  @Input() open: Boolean;

  constructor() { }

  ngOnInit() {
  }

}
