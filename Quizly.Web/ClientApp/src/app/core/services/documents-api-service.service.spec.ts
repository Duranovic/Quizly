import { TestBed } from '@angular/core/testing';

import { DocumentsApiServiceService } from './documents-api-service.service';

describe('DocumentsApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentsApiServiceService = TestBed.get(DocumentsApiServiceService);
    expect(service).toBeTruthy();
  });
});
