import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnlistsPage } from './returnlists.page';

describe('ReturnlistsPage', () => {
  let component: ReturnlistsPage;
  let fixture: ComponentFixture<ReturnlistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnlistsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnlistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
