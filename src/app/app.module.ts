import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';

/*import {
  AgmCoreModule
} from '@agm/core';*/
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';;

import { UploadService } from './upload-file/upload.service';
import { LoginComponent } from './login/login.component';

import { PopupComponent } from './popup/popup.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule ,MatTableModule } from '@angular/material';

import {MatCardModule, MatDialogModule, MatProgressBarModule, MatTooltipModule,MatPaginatorModule } from "@angular/material";
import { ConfirmationAddComponent } from './confirmationadd/confirmationadd.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { PatchComponent } from './patch/patch.component';
import { InformationComponent } from './information/information.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatDialogModule, 
    MatProgressBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatTableModule,
    
    
  ],
  entryComponents: [
    PopupComponent,
    ConfirmationAddComponent,
    EditDataComponent,
    InformationComponent,
   ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    PopupComponent,
    
    ConfirmationAddComponent,
    EditDataComponent,
    PatchComponent,
    InformationComponent,
    
  ],
  providers: [UploadService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
