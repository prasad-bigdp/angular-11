import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { PagesModule } from './pages/pages.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from './environments/environments';
import { PrasadDirective } from './prasad.directive';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, PrasadDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    PagesModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
