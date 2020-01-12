import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UploadService } from 'app/upload-file/upload.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmationadd.component.html',
  styleUrls: ['./confirmationadd.component.scss']
})
export class ConfirmationAddComponent implements OnInit {

  constructor(
    private uploadService: UploadService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<ConfirmationAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any 
              ) { }

  onNoClick(): void{
    this.dialogRef.close();
  }

  ngOnInit() {
      
  }

  createPatch() {
//dataf
   this.uploadService.createData(this.data.dataF.id).subscribe(result => console.log(result),error=> console.log(error))
   console.log(this.data.dataF.id);
   alert("Patch with code dossier "+this.data.dataF.id+" added successfully");
  }


 
  

}
