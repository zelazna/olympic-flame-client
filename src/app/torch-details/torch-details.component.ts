import { Component, OnInit, Input } from '@angular/core';
import { Torch } from '../models';

@Component({
  selector: 'app-torch-details',
  templateUrl: './torch-details.component.html',
  styleUrls: ['./torch-details.component.scss']
})
export class TorchDetailsComponent implements OnInit {
  @Input() torch: Torch;
  constructor() { }

  ngOnInit() {
  }

}
