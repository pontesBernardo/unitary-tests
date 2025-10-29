import { describe, expect, it } from "vitest";
import { sum } from "../components/sum";

describe("Sum Function", () => {
  const result = sum(1, 2);

  it("shoud be able to sum 1 + 2", () => {
    expect(result).toBe(3);
  });
});
