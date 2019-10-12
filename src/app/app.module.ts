import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecommendationsComponent } from './list-recommendations/list-recommendations.component';
import { TypeformComponent } from './typeform/typeform.component';
import {ApiSessionService} from './list-recommendations/api-session.service';

@NgModule({
  declarations: [
    AppComponent,
    ListRecommendationsComponent,
    TypeformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ApiSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
