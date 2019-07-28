import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDonorComponent } from './add-new-donor.component';

describe('AddNewDonorComponent', () => {
  let component: AddNewDonorComponent;
  let fixture: ComponentFixture<AddNewDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
