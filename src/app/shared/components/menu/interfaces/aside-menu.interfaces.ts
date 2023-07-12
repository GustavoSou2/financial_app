import {SafeUrl} from "@angular/platform-browser";

export interface IMenuItem {
  description: string;
  url: SafeUrl;
  icon: string;
  activated: boolean
}
