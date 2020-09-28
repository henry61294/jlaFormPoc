import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactServicingRepairsComponent } from './contact-servicing-repairs.component';

describe('ContactServicingRepairsComponent', () => {
  let component: ContactServicingRepairsComponent;
  let fixture: ComponentFixture<ContactServicingRepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactServicingRepairsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactServicingRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
