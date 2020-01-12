import * as core from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { AccueilComponent } from '../../Accueil/Accueil.component';
import { DonnéesComponent } from '../../Données/Données.component';
import { CompteRenduComponent } from '../../Compte-Rendu/Compte-Rendu.component';
import { HistoriqueComponent } from '../../Historique/Historique.component';
import { UploadFileComponent } from '../../upload-file/upload-file.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ToastrModule } from 'ngx-toastr';

//import {MatDialogModule} from "@angular/material";
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  
 
} from '@angular/material';
import { PopupComponent } from 'app/popup/popup.component';
@core.NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot() // ToastrModule added

  ],
  entryComponents: [
   //PopupComponent,
  ],
  declarations: [
    AccueilComponent,
    DonnéesComponent,
    CompteRenduComponent,
    HistoriqueComponent,
    UploadFileComponent,
  ]
})

export class AdminLayoutModule {}
