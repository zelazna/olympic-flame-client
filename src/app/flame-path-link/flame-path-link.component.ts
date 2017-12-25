import { Component, Input, OnInit } from '@angular/core';
import { FlamePath } from '../models';

@Component({
  selector: 'app-flame-path-link',
  templateUrl: './flame-path-link.component.html',
  styleUrls: ['./flame-path-link.component.css']
})
export class FlamePathLinkComponent implements OnInit {
  @Input()
  path: FlamePath;
  constructor() { }

  ngOnInit() {
  }

}
