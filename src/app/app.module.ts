import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecommendationsComponent } from './list-recommendations/list-recommendations.component';
import { TypeformComponent } from './typeform/typeform.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRecommendationsComponent,
    TypeformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
