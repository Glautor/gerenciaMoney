import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsPage } from './years.page';

describe('YearsPage', () => {
  let component: YearsPage;
  let fixture: ComponentFixture<YearsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
