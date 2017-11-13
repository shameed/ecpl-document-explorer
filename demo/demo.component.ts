import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UploaderConfig } from '../src/uploader-config';
import { UploadedFile } from '../src/interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ecpl-demo-app',
  templateUrl: '/demo/demo.component.html'
})
export class DemoComponent implements OnInit {
  upConfig: any;
  uploadedFiles: any;

  parentText: string = `<p>Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus.</p>

  <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit.</p>

  <p>Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat.</p>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>

  <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>`;

  constructor(private http: HttpClient) {
    this.upConfig = {
      title: 'Test Document window',
      viewSwitch: true,
      uploaderUri: 'http://ngx-uploader.com/upload',
      addtionalData: {}
    };

    this.http.get('/demo/MOCK_DATA.json').subscribe(data => {
      // Read the result field from the JSON response.
      this.uploadedFiles = data;
    });
  }

  ngOnInit() {}
}
