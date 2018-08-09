import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { SortableModule } from '@progress/kendo-angular-sortable';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    DropDownsModule,
    ToolBarModule,
    InputsModule,
    SortableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
