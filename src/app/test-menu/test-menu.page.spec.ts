import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestMenuPage } from './test-menu.page';

describe('TestMenuPage', () => {
  let component: TestMenuPage;
  let fixture: ComponentFixture<TestMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
