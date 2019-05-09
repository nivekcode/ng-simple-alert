import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSimpleAlertComponent } from './ng-simple-alert.component';

describe('NgAlertComponent', () => {
  let component: NgSimpleAlertComponent;
  let fixture: ComponentFixture<NgSimpleAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgSimpleAlertComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSimpleAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
