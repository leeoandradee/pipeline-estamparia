import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetaHomeComponent } from './camiseta-home.component';

describe('CamisetaHomeComponent', () => {
  let component: CamisetaHomeComponent;
  let fixture: ComponentFixture<CamisetaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamisetaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisetaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
