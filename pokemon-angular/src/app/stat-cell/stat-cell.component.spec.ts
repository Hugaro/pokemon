import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCellComponent } from './stat-cell.component';

describe('StatCellComponent', () => {
  let component: StatCellComponent;
  let fixture: ComponentFixture<StatCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
