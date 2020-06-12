import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { GlobalComponent } from './global/global.component';
import { SportsComponent } from './sports/sports.component';
import { EntComponent } from './ent/ent.component';
import { BusComponent } from './bus/bus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    GlobalComponent,
    SportsComponent,
    EntComponent,
    BusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
