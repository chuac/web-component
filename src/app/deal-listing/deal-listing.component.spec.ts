/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DealListingComponent } from './deal-listing.component';

describe('DealListingComponent', () => {
  let component: DealListingComponent;
  let fixture: ComponentFixture<DealListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
