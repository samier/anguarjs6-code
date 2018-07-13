import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';
import { AnimationsComponent } from './animations/animations.component';

import { AutoCompleteModule } from 'ng4-auto-complete';

// services
import { HttpModule } from '@angular/http';
import { PhotosService } from '../services/photos.service';
import { SearchService } from '../services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    SearchComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AutoCompleteModule,
    InfiniteScrollModule,
    

  ],
  providers: [
    PhotosService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// /platformBrowserDynamic().bootstrapModule(AppModule);
