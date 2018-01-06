import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorchDetailsComponent } from './torch-details.component';

describe('TorchDetailsComponent', () => {
  let component: TorchDetailsComponent;
  let fixture: ComponentFixture<TorchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
