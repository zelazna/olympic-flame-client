import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathDetailsComponent } from './path-details.component';

describe('PathDetailsComponent', () => {
  let component: PathDetailsComponent;
  let fixture: ComponentFixture<PathDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
