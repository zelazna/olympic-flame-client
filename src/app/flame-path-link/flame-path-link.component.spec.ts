import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamePathLinkComponent } from './flame-path-link.component';

describe('FlamePathLinkComponent', () => {
  let component: FlamePathLinkComponent;
  let fixture: ComponentFixture<FlamePathLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlamePathLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlamePathLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
