import { useStyle } from "./use-style-hook";

describe("useStyle hook", () => {
  xit("returns a style map", () => {
    const style = useStyle(`
      .foo {
        color: red;
      }
      .bar {
        font-weight: bold;
      }
    `);
    expect(Object.keys(style)).toEqual(["foo", "bar"]);
    expect(Object.entries(style)).toEqual(["foo", "bar"]);
  });
  xit("returns the same style map on subsequent calls when style is the same", () => {});
  xit("returns different style map on subsequent calls when style changes", () => {});
});
