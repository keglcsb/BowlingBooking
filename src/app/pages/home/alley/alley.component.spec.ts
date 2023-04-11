import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleyComponent } from './alley.component';

describe('AlleyComponent', () => {
  let component: AlleyComponent;
  let fixture: ComponentFixture<AlleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
