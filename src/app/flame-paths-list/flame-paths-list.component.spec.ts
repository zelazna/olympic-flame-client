import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamePathsListComponent } from './flame-paths-list.component';

describe('FlamePathsListComponent', () => {
  let component: FlamePathsListComponent;
  let fixture: ComponentFixture<FlamePathsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlamePathsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlamePathsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
