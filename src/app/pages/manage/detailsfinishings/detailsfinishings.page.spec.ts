import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsfinishingsPage } from './detailsfinishings.page';

describe('DetailsfinishingsPage', () => {
  let component: DetailsfinishingsPage;
  let fixture: ComponentFixture<DetailsfinishingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsfinishingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsfinishingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
