import * as app from "../app";
import * as math from "../math";
test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  // override the implementation
  addMock.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  // restore the original implementation
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});

test("calls math.subtract", () => {
  const subtractMock = jest.spyOn(math, "subtract");
  // override the implementation
  subtractMock.mockImplementation(() => "mock");
  expect(app.doSubtract(1, 2)).toEqual("mock");
  // restore the original implementation
  subtractMock.mockRestore();
  expect(app.doSubtract(1, 2)).toEqual(1);
});

test("calls math.multiply", () => {
  const multiplyMock = jest.spyOn(math, "multiply");
  // override the implementation
  multiplyMock.mockImplementation(() => "mock");
  expect(app.doMultiply(2, 2)).toEqual("mock");
  // restore the original implementation
  multiplyMock.mockRestore();
  expect(app.doMultiply(2, 2)).toEqual(4);
});

test("calls math.divide", () => {
  const divideMock = jest.spyOn(math, "divide");
  // override the implementation
  divideMock.mockImplementation(() => "mock");
  expect(app.doDivide(2, 6)).toEqual("mock");
  // restore the original implementation
  divideMock.mockRestore();
  expect(app.doDivide(2, 6)).toEqual(3);
});