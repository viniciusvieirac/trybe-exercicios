const myRemove = require("./script");

describe("Requisito 1", () => {
  it("A função recebe [1, 2, 3, 4], 3 e retorna [1, 2, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
});

describe("Requisito 2", () => {
  it("A função recebe [1, 2, 3, 4], 3 e retorna [1, 2, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});

describe("Requisito 3", () => {
  it("A função recebe [1, 2, 3, 4], 3 e retorna [1, 2, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
