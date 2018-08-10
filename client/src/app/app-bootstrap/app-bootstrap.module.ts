import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-bootstrap';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    ScrollViewModule,
    ToolBarModule,
    InputsModule,
    DialogsModule
  ],
  exports: [
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    CollapseModule,
    CarouselModule,
    ScrollViewModule,
    ToolBarModule,
    InputsModule,
    DialogsModule
  ]
})
export class AppBootstrapModule {
}
