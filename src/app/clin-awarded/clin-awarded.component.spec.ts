/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClinAwardedComponent } from './clin-awarded.component';

describe('ClinAwardedComponent', () => {
  let component: ClinAwardedComponent;
  let fixture: ComponentFixture<ClinAwardedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinAwardedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinAwardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
