import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuUiComponent } from './ui/aside-menu-ui/aside-menu-ui.component';
import { TopMenuUiComponent } from './ui/top-menu-ui/top-menu-ui.component';
import { AsideMenuComponent } from './feature/aside-menu/aside-menu.component';
import { TopMenuComponent } from './feature/top-menu/top-menu.component';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AsideMenuUiComponent,
    TopMenuUiComponent,
    AsideMenuComponent,
    TopMenuComponent
  ],
  exports: [
    AsideMenuComponent,
    TopMenuComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule

  ]
})
export class MenuModule { }
