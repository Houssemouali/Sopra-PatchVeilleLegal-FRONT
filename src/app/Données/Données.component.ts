import { Component, OnInit , Inject } from '@angular/core';
import{UploadService} from '../upload-file/upload.service';
import {
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import { PopupComponent } from 'app/popup/popup.component';
import { routerTransition } from 'app/router.animation';
@Component({
  selector: 'app-Données',
  templateUrl: './Données.component.html',
  animations: [routerTransition()],
  styleUrls: ['./Données.component.css']
})
export class DonnéesComponent implements OnInit {
  dataLi: Array<any>;
  dataHra:  Array<any> ;

  constructor(private uploadService: UploadService, private dialog: MatDialog ) { }

  ngOnInit() {
    this.uploadService.getData().subscribe(data => {
      this.dataLi = data;
    });
    this.uploadService.getModels().subscribe(dataHr => {
      this.dataHra = dataHr;
      console.log(this.dataHra);
    });
  }
  openDialog(ID: number,CD: number) {
    const dialogConfig = new MatDialogConfig();
    const datai=this.dataLi.find(c=>c.id === ID); console.log(datai);
    const dataHi=this.dataHra.find(d=>d.key === CD);console.log(dataHi);

    const dialogRef = this.dialog.open(PopupComponent, {data: {dataF: datai, dataH:dataHi } });
  }

}
