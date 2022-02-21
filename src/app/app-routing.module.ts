import { NewTransaction } from './new-transaction/new-transaction.component';
import { StatementComponent } from './statement/statement.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'statement',
    pathMatch: 'full',
  },
  {
    path: 'statement',
    component: StatementComponent,
  },
  {
    path: 'new-transaction',
    component: NewTransaction,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
