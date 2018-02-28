import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePlaceComponent } from './explore-place.component';

describe('ExplorePlaceComponent', () => {
  let component: ExplorePlaceComponent;
  let fixture: ComponentFixture<ExplorePlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorePlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
