import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScoresComponent } from './scores/scores.component';
import { SearchComponent } from './search/search.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogavgComponent } from './dialogavg/dialogavg.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ScoresComponent,
    SearchComponent,
    DialogComponent,
    DialogavgComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
