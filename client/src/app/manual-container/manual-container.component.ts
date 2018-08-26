import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manual-container',
  templateUrl: './manual-container.component.html',
  styleUrls: ['./manual-container.component.css']
})
export class ManualContainerComponent implements OnInit {
  @Input()
  public dataSource;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  manualClick(manualId, category, name) {
    this.router.navigate(['manuals', manualId, category, name]);
  }
}
