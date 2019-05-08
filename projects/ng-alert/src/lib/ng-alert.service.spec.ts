import { NgAlertService } from "./ng-alert.service";
import { TestScheduler } from "rxjs/testing";

describe("NgAlertService", () => {
  let sut: NgAlertService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    sut = new NgAlertService();
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it("should stream a success message", () => {
    const message = "Vinicius Junior - next worlds best footballer";
    const expectedMessage = { prefix: "Success", message, color: "green" };

    sut.createSuccessAlert(message);
    scheduler
      .expectObservable(sut.alertMessage$)
      .toBe("a", { a: expectedMessage });
  });

  it("should stream a danger message", () => {
    const message = "Vinicius Junior - next worlds best footballer";
    const expectedMessage = { prefix: "Danger", message, color: "red" };

    sut.createSuccessAlert(message);
    scheduler
      .expectObservable(sut.alertMessage$)
      .toBe("a", { a: expectedMessage });
  });

  it("should stream a warning message", () => {
    const message = "Vinicius Junior - next worlds best footballer";
    const expectedMessage = { prefix: "Warning", message, color: "darkorange" };

    sut.createSuccessAlert(message);
    scheduler
      .expectObservable(sut.alertMessage$)
      .toBe("a", { a: expectedMessage });
  });

  it("should stream a info message", () => {
    const message = "Vinicius Junior - next worlds best footballer";
    const expectedMessage = { prefix: "Info", message, color: "dodgerblue" };

    sut.createSuccessAlert(message);
    scheduler
      .expectObservable(sut.alertMessage$)
      .toBe("a", { a: expectedMessage });
  });
});
