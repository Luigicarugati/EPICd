import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brand2Component } from './brand2.component';

describe('Brand2Component', () => {
  let component: Brand2Component;
  let fixture: ComponentFixture<Brand2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Brand2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Brand2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
