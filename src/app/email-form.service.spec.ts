import { TestBed } from '@angular/core/testing';

import { EmailFormService } from './email-form.service';

describe('EmailFormService', () => {
  let service: EmailFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailFormService);
  });

  it('should be created', () => {
    const service: EmailFormService = TestBed.get(EmailFormService); //not too sure what this does
    expect(service).toBeTruthy();
  });
});
