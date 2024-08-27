import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardportComponent } from './cardport.component';

describe('CardportComponent', () => {
  let component: CardportComponent;
  let fixture: ComponentFixture<CardportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
