import { NovaTransferenciaComponent } from './nova-transferencia/nova-tranferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'extrato', component: ExtratoComponent},
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
