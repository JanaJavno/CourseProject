import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './header/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ManualService} from './manual.service';
import {RouterModule} from '@angular/router';

const routes = [
  {path: 'home', component: MainComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CarouselComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ManualService],
  bootstrap: [AppComponent]
})
export class AppModule { }
