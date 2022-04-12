import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhalteComponent } from './inhalte.component';

describe('InhalteComponent', () => {
  let component: InhalteComponent;
  let fixture: ComponentFixture<InhalteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhalteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InhalteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
