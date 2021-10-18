import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';




import { DashboardComponent } from './../app/dashboard/dashboard.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: '', component: AdminLayoutComponent , children : [{
    path : '',
    loadChildren : ()=> import ('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  }]},
  


];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
  
})
export class AppRoutingModule { }
