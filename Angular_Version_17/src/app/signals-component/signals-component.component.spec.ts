import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsComponentComponent } from './signals-component.component';

describe('SignalsComponentComponent', () => {
  let component: SignalsComponentComponent;
  let fixture: ComponentFixture<SignalsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
