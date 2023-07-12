import {Component, Input, OnInit} from '@angular/core';
import {IMenuItem} from "../../interfaces/aside-menu.interfaces";
import {Router} from "@angular/router";
import {SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-aside-menu-ui',
  templateUrl: './aside-menu-ui.component.html',
  styleUrls: ['./aside-menu-ui.component.scss']
})
export class AsideMenuUiComponent implements OnInit {
  @Input() menu: IMenuItem[] = [];

  menuHideState: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clearMenuList(url: SafeUrl) {
    this.menu.map((item) => item.activated = false)

    this.router.navigate([url])
  }

  setMenuHideState() {
    this.menuHideState = !this.menuHideState
  }

}
