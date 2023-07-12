import { Component, OnInit } from '@angular/core';
import {IDashboardBalances, IDashboardCategory} from "../../interfaces/dashboard.interface";

@Component({
  selector: 'app-dashboard',
  template: `<app-dashboard-ui [balances]="balances" [valuesByCategories]="valuesByCategories"></app-dashboard-ui>`,
})
export class DashboardComponent implements OnInit {

  readonly balances: IDashboardBalances[] = [
    {
      id: 1,
      description: 'Total',
      descriptionCode: 'BALANCE',
      value: 5793,
      icon: 'functions'
    },
    {
      id: 2,
      description: 'Receitas',
      descriptionCode: 'RECEIVED',
      value: 1500,
      icon: 'north_east',
      signal: '+'
    },
    {
      id: 1,
      description: 'Despesas',
      descriptionCode: 'EXPENSE',
      value: 457,
      icon: 'south_east',
      signal: '-'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  readonly valuesByCategories: IDashboardCategory[] = [
    {
      id: 1,
      description: 'Educação',
      icon: 'school',
      value: 239,
      color: '#3970ff'
    },
    {
      id: 2,
      description: 'Automóvel',
      icon: 'directions_car',
      value: 1200,
      color: '#f368e0'
    },
    {
      id: 3,
      description: 'Alimentação',
      icon: 'restaurant',
      value: 900,
      color: '#f0932b'
    },
  ]

}
