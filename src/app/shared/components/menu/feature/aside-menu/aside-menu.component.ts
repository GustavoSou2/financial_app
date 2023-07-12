import { Component, OnInit } from '@angular/core';
import {IMenuItem} from "../../interfaces/aside-menu.interfaces";

@Component({
  selector: 'aside-menu',
  template: `<app-aside-menu-ui [menu]="menu"></app-aside-menu-ui>`,
})
export class AsideMenuComponent implements OnInit {
  readonly menu: IMenuItem[] = [
    {
      description: 'Dashboard',
      url: '/dashboard',
      icon: 'grid_view',
      activated: true
    },
    {
      description: 'Cartões',
      url: '/cards',
      icon: 'card_membership',
      activated: false
    },
    {
      description: 'Transações',
      url: '/dashboard',
      icon: 'history',
      activated: false
    },
    {
      description: 'Metas',
      url: '/obj',
      icon: 'my_location',
      activated: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
