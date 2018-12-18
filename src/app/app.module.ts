import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './main/search/search.component';
import {SearchserviceService} from './main/searchservice.service';
import { AnswersComponent } from './main/answers/answers.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AnswersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"home",component:SearchComponent},
      {path:"home/answers/:id",component:AnswersComponent},
      
      //invalid routes
      {path:"**", redirectTo:"home"}
    ])
  ],
  providers: [SearchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
