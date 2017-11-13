import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import {
  UploadOutput,
  UploadInput,
  UploadFile,
  humanizeBytes
} from 'ngx-uploader';
import { UploaderConfig } from './uploader-config';
import { retry } from 'rxjs/operator/retry';
import { UploadedFile } from './interfaces';

@Component({
  selector: 'ecpl-file-window',
  templateUrl: '/src/file-window.component.html',
  styles: [
    `.panel{
            margin-bottom:0px;
            border-radius:0px;
            height:80vh;
            overflow:hidden;
            scroll:auto; 
            padding-top:0;
            padding-bottom:0;          
        }

        .panel-body{
          height:75vh;
          overflow-y:auto;
        }
        
        .thumb-sm{
          position:relative;
          width:36px;
          height:auto;
          display:inline-block;

        }
        
        .thumb-sm /deep/ a>img {
          width:100%;
          height:auto;
        }
        .file-item td{
          vertical-align:middle;
          font-size:12px;
        }
        .thumb-sm .progress{
          height:38px;
          margin-bottom:0px;
        }
        .thumb-sm .percentage{
          position:absolute;
          width:100%;
          text-align:center;
          top:8px;
          font-size:9px;
        }
        .thumbnail{
          position:relative;
        }
        .thumbnail .percentage{
          position: absolute;
          width: 100%;
          text-align: center;
          top: 52px;
          font-size: 14px;
        }`
  ]
})
export class FileWindowComponent implements OnInit {
  @Input() config: any;

  @Input()
  //uploadedFiles:UploadedFile[];
  uploadedFiles: any;

  formData: any;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: any;
  dragOver: boolean;
  listView: any = true;

  constructor() {
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
  }

  onViewChange() {
    if (this.listView) {
      this.listView = false;
    } else {
      this.listView = true;
    }
    //console.log('this.listView', this.listView);
  }

  onUploadOutput(output: UploadOutput): void {
    console.log(output);
    if (output.type === 'allAddedToQueue') {
      // when all files added in queue
      // uncomment this if you want to auto upload files when added
      // const event: UploadInput = {
      //     type: 'uploadAll',
      //     url: 'http://ngx-uploader.com/upload',
      //     method: 'POST',
      //     data: { foo: 'bar' }
      // };
      // this.uploadInput.emit(event);
    } else if (
      output.type === 'addedToQueue' &&
      typeof output.file !== 'undefined'
    ) {
      // add file to array when added
      this.files.push(output.file);
    } else if (
      output.type === 'uploading' &&
      typeof output.file !== 'undefined'
    ) {
      // update current data in files array for uploading file
      const index = this.files.findIndex(
        file => typeof output.file !== 'undefined' && file.id === output.file.id
      );
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter(
        (file: UploadFile) => file !== output.file
      );
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    } else if (output.type === 'done') {
      console.log('Upload done');
      // This will throw error until responce changed as Uploadedfile

      this.uploadedFiles.push(output.file.response[0]);
      this.removeFromFiles(this.files, output.file);
      console.log('nw uploaded files', this.uploadedFiles);
    }
  }

  // if you need start upload when event triiger
  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: this.config.uploaderUri,
      method: 'POST',
      data: this.config.addtionalData
    };
    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }

  fileExtension(filename: string) {
    return filename.split('.').pop();
  }

  removeFromFiles(files: any, obj: any): void {
    const index = files.indexOf(obj);
    files.splice(index, 1);
  }

  humanizeType(filename: string) {
    let extn = filename.split('.').pop();
    let type = '';
    //console.log("extn", extn);

    switch (extn) {
      case 'xlsx':
      case 'xls':
        type = 'Speadsheet';
        break;
      case 'docx':
      case 'doc':
      case 'rtf':
        type = 'Word Document';
        break;
      case 'ppt':
      case 'pptx':
        type = 'Presentation';
        break;
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'bmp':
      case 'gif':
      case 'tiff':
        type = 'Image file';
        break;
      case 'mp3':
      case 'wav':
        type = 'Audio file';
        break;
      case 'avi':
      case 'mp4':
        filename;
      case '3gpp':
      case 'webm':
      case 'flv':
        type = 'Video file';
        break;
      case 'txt':
        type = 'Text file';
        break;
      case 'pdf':
        type = 'Pdf file';
        break;
      case 'zip':
      case 'rar':
      case '7z':
        type = 'Archive file';
        break;
      default:
        type = 'Article';
        break;
    }

    return type;
  }

  ngOnInit() {
    console.log('file win uploadedFiles', this.uploadedFiles);
    console.log('Config', this.config);
  }
}
