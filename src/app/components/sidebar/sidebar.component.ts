import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/create', title: 'CREATE-USER',  icon:'library_books', class: '' },
  { path: '/list-users', title: 'LIST-USERS',  icon:'content_paste', class: '' },
  { path: '/TANAMAN', title: 'TANAMAN',  icon:'library_books', class: '' },
  { path: '/LIST-TANAMAN', title: 'LIST-TANAMAN',  icon:'content_paste', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
