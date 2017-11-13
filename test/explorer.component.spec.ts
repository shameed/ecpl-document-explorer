import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { ExplorerComponent } from '../src/explorer.component';
import { EcplDocumentExplorerModule } from '../src';

describe('ecpl-explorer component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EcplDocumentExplorerModule.forRoot()]
    });
  });
});
