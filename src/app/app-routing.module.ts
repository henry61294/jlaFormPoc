import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactServicingRepairsComponent } from './contact-servicing-repairs/contact-servicing-repairs.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"contact-servicing-repairs", component:ContactServicingRepairsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
