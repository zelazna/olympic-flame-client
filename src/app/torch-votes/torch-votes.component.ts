import { Component, OnInit } from '@angular/core';
import { TorchService } from '../services';
import { Torch } from '../models';

@Component({
  selector: 'app-torch-votes',
  templateUrl: './torch-votes.component.html',
  styleUrls: ['./torch-votes.component.scss']
})
export class TorchVotesComponent implements OnInit {
  torchs: Torch[];
  constructor(private torchService: TorchService) { }

  ngOnInit() {
    this.torchService.getAllTorchs().valueChanges.subscribe((response) => {
      this.torchs = response.data.torchs;
    });
  }

}
