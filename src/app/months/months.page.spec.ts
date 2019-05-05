import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsPage } from './months.page';

describe('MonthsPage', () => {
  let component: MonthsPage;
  let fixture: ComponentFixture<MonthsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
