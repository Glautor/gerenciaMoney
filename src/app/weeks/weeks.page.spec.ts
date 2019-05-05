import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeksPage } from './weeks.page';

describe('WeeksPage', () => {
  let component: WeeksPage;
  let fixture: ComponentFixture<WeeksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
