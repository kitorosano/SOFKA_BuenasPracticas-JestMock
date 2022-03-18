import * as app from "../app";
import * as math from "../math";

test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3);
  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  const subtractMock = jest.spyOn(math, "subtract");
  // calls the original implementation
  expect(app.doSubtract(1, 2)).toEqual(1);
  // and the spy stores the calls to subtract
  expect(subtractMock).toHaveBeenCalledWith(1, 2);
});

test("calls math.multiply", () => {
  const multiplyMock = jest.spyOn(math, "multiply");
  // calls the original implementation
  expect(app.doMultiply(2, 2)).toEqual(4);
  // and the spy stores the calls to multiply
  expect(multiplyMock).toHaveBeenCalledWith(2, 2);
});

test("calls math.divide", () => {
  const divideMock = jest.spyOn(math, "divide");
  // calls the original implementation
  expect(app.doDivide(2, 6)).toEqual(3);
  // and the spy stores the calls to divide
  expect(divideMock).toHaveBeenCalledWith(2, 6);
});