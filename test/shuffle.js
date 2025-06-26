import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle()", () => {
  it("returns a *new* array containing all original elements", () => {
    const original = [1, 2, 3, 4, 5];
    const result   = shuffle(original);

    expect(result).to.have.members(original);
    expect(result).to.not.equal(original);
  });

  it("changes the order most of the time", () => {
    const original = Array.from({ length: 20 }, (_, i) => i);
    const result   = shuffle(original);

    const unchanged = result.filter((v, i) => v === original[i]).length;
    expect(unchanged).to.be.below(original.length);
  });
});
