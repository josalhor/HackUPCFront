import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecommendationsComponent } from './list-recommendations/list-recommendations.component';
import { TypeformComponent } from './typeform/typeform.component';
import {ApiSessionService} from './services/api-session.service';
import { LoadingComponent } from './loading/loading.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: 'recommender', component: ListRecommendationsComponent },
  { path: '', component: LoadingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListRecommendationsComponent,
    TypeformComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    NgxSpinnerModule,
  ],

  providers: [ApiSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
