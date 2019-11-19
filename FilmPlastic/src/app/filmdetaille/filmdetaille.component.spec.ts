import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmdetailleComponent } from './filmdetaille.component';

describe('FilmdetailleComponent', () => {
  let component: FilmdetailleComponent;
  let fixture: ComponentFixture<FilmdetailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmdetailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmdetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
