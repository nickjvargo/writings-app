import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WritingListComponent } from './writing-list/writing-list.component';
import { HomeComponent } from './home/home.component';
import { WritingComponent } from './writing-list/writing.component';

@NgModule({
  declarations: [
    AppComponent,
    WritingListComponent,
    HomeComponent,
    WritingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'stories', component: WritingListComponent },
      { path: 'stories/:id', component: WritingComponent},
      { path: '', component: HomeComponent },
      { path: '**', component: HomeComponent }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
