import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './landingpage/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
