/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewClinComponent } from './new-clin.component';

describe('NewClinComponent', () => {
  let component: NewClinComponent;
  let fixture: ComponentFixture<NewClinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
