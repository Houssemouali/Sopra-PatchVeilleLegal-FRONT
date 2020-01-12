import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadService } from 'app/upload-file/upload.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { InformationComponent } from 'app/information/information.component';

@Component({
  selector: 'app-Compte-Rendu',
  templateUrl: './Compte-Rendu.component.html',
  styleUrls: ['./Compte-Rendu.component.css']
})
export class CompteRenduComponent implements OnInit {
Rendu: Array<any>

  constructor(private uploadService: UploadService,private http: HttpClient ,private dialog: MatDialog) { }

  ngOnInit() {
    this.uploadService.getRendu().subscribe(data => {
      this.Rendu = data;
    });
  }
  openDialog(ID: number) {
    const dialogConfig = new MatDialogConfig();
    const datai=this.Rendu.find(c=>c.id === ID); console.log(datai);
    const dialogRef = this.dialog.open(InformationComponent, {data:datai});
  }

}
