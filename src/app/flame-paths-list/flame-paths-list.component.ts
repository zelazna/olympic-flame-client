import { Component, OnInit } from '@angular/core';
import { FlamePath } from '../models';
import { PathService } from '../services/path/path.service';

@Component({
  selector: 'app-flame-paths-list',
  templateUrl: './flame-paths-list.component.html',
  styleUrls: ['./flame-paths-list.component.css']
})
export class FlamePathsListComponent implements OnInit {
  allPaths: FlamePath[] = [];
  loading = true;
  constructor(private pathService: PathService) { }

  ngOnInit() {
    this.pathService.getAllPaths().valueChanges.subscribe((response) => {
      this.allPaths = response.data.allFlamePath;
      this.loading = response.data.loading;
    });
  }
}
