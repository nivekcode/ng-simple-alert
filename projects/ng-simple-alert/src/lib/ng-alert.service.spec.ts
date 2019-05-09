import { TestScheduler } from 'rxjs/testing';
import { NgSimpleAlertService } from './ng-simple-alert.service';

describe('NgAlertService', () => {
  let sut: NgSimpleAlertService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    sut = new NgSimpleAlertService();
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should stream a success message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Success', message, color: 'green' };

    sut.createSuccessAlert(message);
    scheduler.expectObservable(sut.alertMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a danger message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Danger', message, color: 'red' };

    sut.createSuccessAlert(message);
    scheduler.expectObservable(sut.alertMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a warning message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Warning', message, color: 'darkorange' };

    sut.createSuccessAlert(message);
    scheduler.expectObservable(sut.alertMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a info message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Info', message, color: 'dodgerblue' };

    sut.createSuccessAlert(message);
    scheduler.expectObservable(sut.alertMessage$).toBe('a', { a: expectedMessage });
  });
});
