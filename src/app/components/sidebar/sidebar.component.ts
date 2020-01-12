import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/Accueil', title: 'Accueil',  icon: 'dashboard', class: '' },
    { path: '/Données', title: 'Données',  icon:'library_books', class: '' },
    { path: '/Compte-Rendu', title: 'Compte Rendu',  icon:'content_paste', class: '' },
    { path: '/Historique', title: 'Historique',  icon:'history', class: '' },
    
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
  
}
