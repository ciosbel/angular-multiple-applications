import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonStoreComponent } from './common-store.component';

describe('CommonStoreComponent', () => {
  let component: CommonStoreComponent;
  let fixture: ComponentFixture<CommonStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
