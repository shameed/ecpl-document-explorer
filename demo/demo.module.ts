import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from 'ngx-ckeditor';
import { EcplDocumentExplorerModule } from '../src';
import { EcplPdfViewerModule } from 'ecpl-pdf-viewer';
import { EcplOnlyofficeViewerModule } from 'ecpl-onlyoffice-viewer';
import { EcplImageViewerModule } from 'ecpl-image-viewer';
import { EcplArticleViewerModule } from 'ecpl-article-viewer';
import { DemoComponent } from './demo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    CKEditorModule,
    EcplPdfViewerModule,
    EcplOnlyofficeViewerModule,
    EcplImageViewerModule,
    EcplArticleViewerModule,
    EcplDocumentExplorerModule.forRoot()
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
