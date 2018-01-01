import { Component, OnInit } from '@angular/core';
import { FlamePath } from '../models';
import { PathService } from '../services/path/path.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  allPaths: FlamePath[] = [];
  constructor(private pathService: PathService) { }

  ngOnInit() {
    this.pathService.getAllPaths().valueChanges.subscribe((response) => {
      this.allPaths = response.data.allFlamePath;
    });
  }
}
