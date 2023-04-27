import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MockStore } from '@ngrx/store/testing';
import { DropdownComponent } from './dropdown.component';
import { Rate } from '../../../core/interfaces/rate';
import { RateCode } from '../../../core/enums/rate-code';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let fakeStore: MockStore;
  const fakeRate: Rate = {
    code: RateCode.USD,
    isSelected: true,
    currentValue: 0.11111,
    previousValue: 0.111112,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      declarations: [DropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fakeStore = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add active rate', () => {
    const storeSpy = spyOn(fakeStore, 'dispatch');
    component.onClick(fakeRate);
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });
});
