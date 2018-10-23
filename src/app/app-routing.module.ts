import { ClientFormComponent } from './client-info/client-form/client-form.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ClientsTableComponent },
  { path: 'client-form', component: ClientFormComponent },
  { path: 'client-info/:id', component: ClientInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
