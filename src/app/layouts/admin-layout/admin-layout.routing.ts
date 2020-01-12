import { Routes } from '@angular/router';

import { AccueilComponent } from '../../Accueil/Accueil.component';
import { DonnéesComponent } from '../../Données/Données.component';
import { CompteRenduComponent } from '../../Compte-Rendu/Compte-Rendu.component';
import { HistoriqueComponent } from '../../Historique/Historique.component';
import { AdminLayoutComponent } from './admin-layout.component';


export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'Accueil', pathMatch: 'prefix' },
    { path: 'Accueil',      component: AccueilComponent },
    { path: 'Données',   component: DonnéesComponent },
    { path: 'Compte-Rendu',     component: CompteRenduComponent },
    { path: 'Historique',     component: HistoriqueComponent },
    
    
];
