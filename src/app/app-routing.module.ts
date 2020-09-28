import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactServicingRepairsComponent } from './contact-servicing-repairs/contact-servicing-repairs.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:"", component:ContactServicingRepairsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
