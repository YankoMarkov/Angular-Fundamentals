import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMyProductComponent } from './delete-my-product.component';

describe('DeleteMyProductComponent', () => {
  let component: DeleteMyProductComponent;
  let fixture: ComponentFixture<DeleteMyProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMyProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
