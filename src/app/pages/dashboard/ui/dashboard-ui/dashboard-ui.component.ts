import {Component, Input, OnInit} from '@angular/core';
import {IDashboardBalances, IDashboardCategory} from "../../interfaces/dashboard.interface";

@Component({
  selector: 'app-dashboard-ui',
  templateUrl: './dashboard-ui.component.html',
  styleUrls: ['./dashboard-ui.component.scss']
})
export class DashboardUiComponent implements OnInit {
  @Input() balances: IDashboardBalances[] = [];
  @Input() valuesByCategories: IDashboardCategory[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
