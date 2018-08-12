import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreByCategoryComponent } from './more-by-category.component';

describe('MoreByCategoryComponent', () => {
  let component: MoreByCategoryComponent;
  let fixture: ComponentFixture<MoreByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
