import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiphersComponent } from './ciphers.component';

describe('CiphersComponent', () => {
  let component: CiphersComponent;
  let fixture: ComponentFixture<CiphersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiphersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiphersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
