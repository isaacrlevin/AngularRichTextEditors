/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TinyMceComponent } from './tiny-mce.component';

describe('TinyMceComponent', () => {
  let component: TinyMceComponent;
  let fixture: ComponentFixture<TinyMceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinyMceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyMceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
