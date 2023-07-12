import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { DashboardUiComponent } from './ui/dashboard-ui/dashboard-ui.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardUiComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule
  ]
})
export class DashboardModule { }
