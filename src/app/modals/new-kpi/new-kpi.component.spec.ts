/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewKpiComponent } from './new-kpi.component';

describe('NewKpiComponent', () => {
  let component: NewKpiComponent;
  let fixture: ComponentFixture<NewKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
