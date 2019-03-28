import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayoptionComponent } from './displayoption/displayoption.component';

const routes: Routes = [{
  path: 'displayOption',
        component: DisplayoptionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
