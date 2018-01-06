import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorchVotesComponent } from './torch-votes.component';

describe('TorchVotesComponent', () => {
  let component: TorchVotesComponent;
  let fixture: ComponentFixture<TorchVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorchVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorchVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
