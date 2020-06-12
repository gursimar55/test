import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component'; 
import { ContactComponent } from './contact/contact.component'; 
import { GlobalComponent } from './global/global.component'; 
import { EntComponent } from './ent/ent.component'; 
import { SportsComponent } from './sports/sports.component'; 
import { BusComponent } from './bus/bus.component'; 



const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'global', component: GlobalComponent }, 
  { path: 'sports', component: SportsComponent },
  { path: 'ent', component: EntComponent },   
  { path: 'bus', component: BusComponent }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
