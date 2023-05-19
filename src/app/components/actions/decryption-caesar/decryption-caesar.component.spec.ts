import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptionCaesarComponent } from './decryption-caesar.component';

describe('DecryptionCaesarComponent', () => {
  let component: DecryptionCaesarComponent;
  let fixture: ComponentFixture<DecryptionCaesarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecryptionCaesarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecryptionCaesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
