import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathIntroComponent } from './path-intro.component';

describe('PathIntroComponent', () => {
  let component: PathIntroComponent;
  let fixture: ComponentFixture<PathIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
