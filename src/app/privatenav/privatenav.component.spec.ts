import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatenavComponent } from './privatenav.component';

describe('PrivatenavComponent', () => {
  let component: PrivatenavComponent;
  let fixture: ComponentFixture<PrivatenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
