import { Component, OnInit } from '@angular/core';
import {ManualService} from '../manual.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public items: any[] = [
    { title: 'Best of manuals', url: '..//assets/Henningsvaer-(Norway).jpg' },
    { title: 'Best of manuals', url: '..//assets/Ship-between-cliffs.jpg' },
    { title: 'Best of manuals', url: '..//assets/Vestmanland-(Sweden).jpg' }
  ];
  public width = '1500px';
  public height = '400px';
  private temp;
  constructor(private _manualService: ManualService, private router: Router) {
  }

  ngOnInit() {
  }
  goToCategory(type) {
    this.router.navigate(['category', type]);
    /*this._manualService.getCategory(type).subscribe(manuals => this.manuals = manuals);*/
  }
}
