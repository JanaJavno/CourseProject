import { Component, OnInit } from '@angular/core';
import {ManualService} from '../services/manual.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public manuals;
  public items: any[] = [
    { title: 'Best of manuals', url: '..//assets/Henningsvaer-(Norway).jpg' },
    { title: 'Best of manuals', url: '..//assets/Ship-between-cliffs.jpg' },
    { title: 'Best of manuals', url: '..//assets/Vestmanland-(Sweden).jpg' }
  ];
  public width = '1500px';
  public height = '400px';
  isAuthenticated = this.authService.isAuthenticated();
  constructor(private _manualService: ManualService, private router: Router, private authService: AuthService) {
    this._manualService.getAll()
      .subscribe(manuals => this.manuals = manuals);
  }

  ngOnInit() {
  }

  goToCategory(type) {
    this.router.navigate(['category', type]);
  }

  addManual() {
    this.router.navigate(['manualFactory']);
  }
}
