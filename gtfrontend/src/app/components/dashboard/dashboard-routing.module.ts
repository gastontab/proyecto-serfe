import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ScoresComponent } from './scores/scores.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children:[
    {path:'', component:InicioComponent},
    {path:'scores', component:ScoresComponent},
    {path:'search', component:SearchComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
