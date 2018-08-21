import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ManualService} from '../manual.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
  public manualId;
  public category;
  public steps;
  public manual;
  constructor(private activatedRoute: ActivatedRoute, private manualService: ManualService, private router: Router) {
    this.activatedRoute.params.subscribe(p => {this.manualId = p.manualId; this.category = p.category; });
  }

  ngOnInit() {
      this.manualService.getManualById(this.manualId).subscribe(steps => this.steps = steps);
  }
  goToCategory(type) {
    this.router.navigate(['category', type]);
  }
}
