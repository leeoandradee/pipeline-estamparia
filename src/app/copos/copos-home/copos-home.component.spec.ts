import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoposHomeComponent } from './copos-home.component';

describe('CoposHomeComponent', () => {
  let component: CoposHomeComponent;
  let fixture: ComponentFixture<CoposHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoposHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoposHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
