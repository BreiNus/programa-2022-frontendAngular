import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyQuienSoyComponent } from './body-quien-soy.component';

describe('BodyQuienSoyComponent', () => {
  let component: BodyQuienSoyComponent;
  let fixture: ComponentFixture<BodyQuienSoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyQuienSoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyQuienSoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
