import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetaDetailComponent } from './camiseta-detail.component';

describe('CamisetaItemComponent', () => {
  let component: CamisetaDetailComponent;
  let fixture: ComponentFixture<CamisetaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamisetaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisetaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
