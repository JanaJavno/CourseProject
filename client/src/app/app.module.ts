import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './header/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ManualService} from './manual.service';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';
import { CategoryComponent } from './category/category.component';
import { ManualComponent } from './manual/manual.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ManualContainerComponent } from './manual-container/manual-container.component';

const routes = [
  {path: 'home', component: MainComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'category/:type', component: CategoryComponent},
  {path: 'manuals/:manualId/:category', component: ManualComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CarouselComponent,
    LoginComponent,
    RegistrationComponent,
    CategoryComponent,
    ManualComponent,
    ManualContainerComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    NgxPageScrollModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ManualService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
