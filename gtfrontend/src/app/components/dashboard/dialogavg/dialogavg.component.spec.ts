import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogavgComponent } from './dialogavg.component';

describe('DialogavgComponent', () => {
  let component: DialogavgComponent;
  let fixture: ComponentFixture<DialogavgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogavgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogavgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
