import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgUploaderModule } from 'ngx-uploader';
import { EcplPdfViewerModule } from 'ecpl-pdf-viewer';
import { EcplOnlyofficeViewerModule } from 'ecpl-onlyoffice-viewer';
import { EcplImageViewerModule } from 'ecpl-image-viewer';
import { EcplArticleViewerModule } from 'ecpl-article-viewer';
import { FileWindowComponent } from './file-window.component';
import { StatusBarComponent } from './status-bar.component';
import { ExplorerComponent } from './explorer.component';

@NgModule({
  declarations: [FileWindowComponent, StatusBarComponent, ExplorerComponent],
  imports: [
    CommonModule,
    EcplPdfViewerModule,
    EcplOnlyofficeViewerModule,
    EcplImageViewerModule,
    EcplArticleViewerModule,
    NgUploaderModule
  ],
  exports: [FileWindowComponent, StatusBarComponent, ExplorerComponent]
})
export class EcplDocumentExplorerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EcplDocumentExplorerModule
    };
  }
}
