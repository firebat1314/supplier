import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessinglistsPage } from './processinglists.page';

describe('ProcessinglistsPage', () => {
  let component: ProcessinglistsPage;
  let fixture: ComponentFixture<ProcessinglistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessinglistsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessinglistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
