import { TestBed } from '@angular/core/testing';

import { LibraryDemoService } from './library-demo.service';

describe('LibraryDemoService', () => {
  let service: LibraryDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
