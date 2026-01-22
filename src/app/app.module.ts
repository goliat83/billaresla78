import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/pages/home-component/home-component.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        ErrorPageComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        NgxScrollTopModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
