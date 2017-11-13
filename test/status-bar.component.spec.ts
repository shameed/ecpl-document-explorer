import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { StatusBarComponent } from '../src/status-bar.component';
import { EcplDocumentExplorerModule } from '../src';

describe('ecpl-status-bar component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EcplDocumentExplorerModule.forRoot()]
    });
  });
});
