import { Component, OnInit } from '@angular/core';
import{UploadService} from './upload.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { routerTransition } from 'app/router.animation';
import { FormControl, Validators, FormGroup ,FormBuilder, AbstractControl } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  animations: [routerTransition()],
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  
  selectedFiles: FileList;
  currentFileUpload: File;
  name: any={};
  progress: { percentage: number } = { percentage: 0 };
  dataLi: Array<any>;
  router: any;
 addnameForm: FormGroup;
 
 //,private toastr: ToastrService 
  constructor(private uploadService: UploadService,private http: HttpClient ,
    private formBuilder: FormBuilder) { 
    this.addnameForm=this.formBuilder.group({
      'name': ['', [Validators.required,Validators.minLength(4)]]

    });

    // function nameDomain(control: AbstractControl): { [key: string]: any } | null {
    //   const namesc: string = control.value;
    //   const domain = namesc.substring(this.name.startsWith('vl_'));
    //   if (domain.toLowerCase() === 'vl_') {
    //     return null;
    //   } else {
    //     return { 'nameDomain': true };
    //   }
    // }
  }

  ngOnInit() {
    this.uploadService.getData().subscribe(data => {
      this.dataLi = data;
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  
  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    console.log('name',this.addnameForm.controls['name'].value);
    this.uploadService.pushFileToStorage(this.currentFileUpload,this.addnameForm.controls['name'].value).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        alert("File is completely uploaded!");
        //this.toastr.success('File is completely uploaded!', 'Success!');

      }
    });
    this.selectedFiles = undefined;
  }
  
}
