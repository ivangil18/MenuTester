import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeveloperEditComponent } from './developer/developer-edit/developer-edit.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  { path: 'details/:id', component: DeveloperEditComponent },
  { path: '', component: DeveloperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
