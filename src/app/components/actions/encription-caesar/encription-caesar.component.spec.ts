import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncriptionCaesarComponent } from './encription-caesar.component';

describe('EncriptionCaesarComponent', () => {
  let component: EncriptionCaesarComponent;
  let fixture: ComponentFixture<EncriptionCaesarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncriptionCaesarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncriptionCaesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
