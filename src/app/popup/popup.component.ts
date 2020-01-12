import { Component, OnInit,Input, Optional, Host, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog, MatTooltipModule } from '@angular/material';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationAddComponent } from 'app/confirmationadd/confirmationadd.component';
import { EditDataComponent } from 'app/edit-data/edit-data.component';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  
  constructor(
    private dialogRef: MatDialogRef<PopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog

              ) { }

  onNoClick(): void{
    this.dialogRef.close();
  }

  ngOnInit() {
  
    
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    const datai=this.data; console.log(datai);
    const dialogRef = this.dialog.open(ConfirmationAddComponent, {data:datai});
    
  }
  editPatch(){

    const dialogConfig = new MatDialogConfig();
    const datai=this.data; console.log(datai);
    const dialogRef = this.dialog.open(EditDataComponent, {data:datai});
  }

  }



