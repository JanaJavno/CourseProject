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
import {ManualService} from './services/manual.service';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import { CategoryComponent } from './category/category.component';
import { ManualComponent } from './manual/manual.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ManualContainerComponent } from './manual-container/manual-container.component';
import { ManualFactoryComponent } from './manual-factory/manual-factory.component';
import { UploadModule } from '@progress/kendo-angular-upload';
import { EventLogComponent } from './event-log/event-log.component';
import {FileDropModule} from 'ngx-file-drop';
import { StepFormComponent } from './step-form/step-form.component';


const routes = [
  {path: 'home', component: MainComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'manualFactory', component: ManualFactoryComponent},
  {path: 'category/:type', component: CategoryComponent},
  {path: 'manuals/:manualId/:category/:name', component: ManualComponent},
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
    ManualContainerComponent,
    ManualFactoryComponent,
    EventLogComponent,
    StepFormComponent
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
    UploadModule,
    FileDropModule
  ],
  providers: [ManualService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
