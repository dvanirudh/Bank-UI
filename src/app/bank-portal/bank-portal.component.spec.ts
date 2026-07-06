import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPortalComponent } from './bank-portal.component';

describe('BankPortalComponent', () => {
  let component: BankPortalComponent;
  let fixture: ComponentFixture<BankPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
