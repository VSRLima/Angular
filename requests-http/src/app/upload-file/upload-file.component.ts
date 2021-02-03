import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { pipe, Subject } from 'rxjs';
import { UploadFileService } from './service/upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnDestroy {

  files: Set<File>;
  unsub$ = new Subject();

  constructor(private service: UploadFileService) { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.files = new Set();
    const selectedFiles = <FileList>event.srcElement.files;
    const fileNames = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, 'http://localhost:8000/upload')
      .subscribe(response => console.log('Upload Concluído'));
    }
  }

  ngOnDestroy() {
    
  }

}
