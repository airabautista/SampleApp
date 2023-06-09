import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VlogsPage } from './vlogs.page';

describe('VlogsPage', () => {
  let component: VlogsPage;
  let fixture: ComponentFixture<VlogsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VlogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
