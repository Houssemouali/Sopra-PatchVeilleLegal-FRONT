import { Component, OnInit, Inject } from '@angular/core';
import { UploadService } from 'app/upload-file/upload.service';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
editData: Array<any>

  constructor(private uploadService: UploadService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<EditDataComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {

  }
  Submit(){
    this.uploadService.EditData(this.data.id).subscribe(result => console.log(result),error=> console.log(error))
    
  }

}
