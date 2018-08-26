import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ManualService} from '../services/manual.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public manuals;
  public type;
  constructor(private route: ActivatedRoute, private _manualService: ManualService) {
      this.route.params.subscribe(params => {
        this.type = params.type;
        this._manualService.getCategory(params.type)
          .subscribe(manuals => this.manuals = manuals);
      });
  }

  ngOnInit() {
  }

}
