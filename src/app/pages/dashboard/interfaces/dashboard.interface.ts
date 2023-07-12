export interface IDashboardBalances {
  id: number;
  description: string;
  descriptionCode: string;
  value: number;
  icon: string;
  signal?: string;
}


export interface IDashboardCategory {
  id: number;
  description: string;
  icon: string;
  color: string;
  value: number;
}
