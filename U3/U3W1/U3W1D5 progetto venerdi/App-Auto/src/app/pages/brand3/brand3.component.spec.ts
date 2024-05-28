import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brand3Component } from './brand3.component';

describe('Brand3Component', () => {
  let component: Brand3Component;
  let fixture: ComponentFixture<Brand3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Brand3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Brand3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
