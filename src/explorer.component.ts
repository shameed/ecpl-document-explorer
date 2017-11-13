import { Component, Input, OnInit } from '@angular/core';
import { UploaderConfig } from './uploader-config';
import { UploadedFile } from './interfaces';

@Component({
  selector: 'ecpl-explorer',
  templateUrl: '/src/explorer.component.html',
  styleUrls: ['/src/explorer.component.css']
})
export class ExplorerComponent implements OnInit {
  @Input() uploaderConfig: any;

  @Input() uploadedFiles: UploadedFile[];

  constructor() {}

  ngOnInit() {}
}
