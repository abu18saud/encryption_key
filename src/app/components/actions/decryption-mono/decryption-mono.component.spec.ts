import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptionMonoComponent } from './decryption-mono.component';

describe('DecryptionMonoComponent', () => {
  let component: DecryptionMonoComponent;
  let fixture: ComponentFixture<DecryptionMonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecryptionMonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecryptionMonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
