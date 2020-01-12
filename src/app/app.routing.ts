import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import{LoginComponent} from './login/login.component';
import { AccueilComponent } from './Accueil/Accueil.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: 'login', component:LoginComponent,
    
  }
  
    // { path: 'Accueil',      component: AccueilComponent },
    // { path: 'Données',   component: DonnéesComponent },
    // { path: 'Compte-Rendu',     component: CompteRenduComponent },
    // { path: 'Historique',     component: HistoriqueComponent },
    // { path: '',               redirectTo: 'Accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
    
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
