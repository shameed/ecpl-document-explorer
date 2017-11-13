import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { FileWindowComponent } from '../src/file-window.component';
import { EcplDocumentExplorerModule } from '../src';

describe('ecpl-file-window component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EcplDocumentExplorerModule.forRoot()]
    });
  });
});
