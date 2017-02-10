/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewJurisdictionComponent } from './new-jurisdiction.component';

describe('NewJurisdictionComponent', () => {
  let component: NewJurisdictionComponent;
  let fixture: ComponentFixture<NewJurisdictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJurisdictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJurisdictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
