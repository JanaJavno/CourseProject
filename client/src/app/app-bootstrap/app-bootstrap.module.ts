import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SortableModule } from '@progress/kendo-angular-sortable';

@NgModule({
  imports: [
    CommonModule,
    ScrollViewModule,
    ToolBarModule,
    DialogsModule,
    ButtonsModule,
    DropDownsModule,
    InputsModule,
    SortableModule
  ],
  exports: [
    ScrollViewModule,
    ToolBarModule,
    InputsModule,
    DialogsModule,
    DropDownsModule,
    ButtonsModule,
    SortableModule
  ]
})
export class AppBootstrapModule {
}
