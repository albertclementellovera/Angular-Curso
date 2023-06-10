import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablanroComponent } from './tablanro/tablanro.component';
const routes: Routes = [{
  path: "tabla/:nro",
  component: TablanroComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

