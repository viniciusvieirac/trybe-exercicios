const fizzBuzz = require("./script");

describe("Requisito 1", () => {
  it("valor esperado", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });
});

describe("Requisito 2", () => {
  it("valor esperado", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });
});

describe("Requisito 3", () => {
  it("valor esperado", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });
});

describe("Requisito 4", () => {
  it("valor esperado", () => {
    expect(fizzBuzz(4)).toBe(4);
  });
});

describe("Requisito 5", () => {
  it("valor esperado", () => {
    expect(fizzBuzz("vasco")).toBe(false);
  });
});
