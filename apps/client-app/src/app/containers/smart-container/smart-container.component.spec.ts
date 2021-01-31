import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartContainerComponent } from './smart-container.component';

describe('SmartContainerComponent', () => {
  let component: SmartContainerComponent;
  let fixture: ComponentFixture<SmartContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
