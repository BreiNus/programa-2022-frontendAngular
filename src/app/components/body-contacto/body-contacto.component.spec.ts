import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContactoComponent } from './body-contacto.component';

describe('BodyContactoComponent', () => {
  let component: BodyContactoComponent;
  let fixture: ComponentFixture<BodyContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
