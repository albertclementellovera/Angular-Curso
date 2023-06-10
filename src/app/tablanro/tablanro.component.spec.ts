import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablanroComponent } from './tablanro.component';

describe('TablanroComponent', () => {
  let component: TablanroComponent;
  let fixture: ComponentFixture<TablanroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablanroComponent]
    });
    fixture = TestBed.createComponent(TablanroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
