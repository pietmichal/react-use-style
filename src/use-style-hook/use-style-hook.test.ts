import { testHook } from "react-testing-library";
import { useStyle } from "./use-style-hook";

describe("useStyle hook", () => {
  it("returns a style map", () => {
    const input = `
      .foo {
        color: red;
      }
      .bar {
        font-weight: bold;
      }
    `;

    let style: any;
    testHook(() => (style = useStyle(input)));

    expect(Object.keys(style)).toEqual(["foo", "bar"]);
    expect(Object.values(style)).not.toEqual(["foo", "bar"]);
  });

  it("returns the same style map on subsequent calls when style is the same", () => {
    const input = `
      .foo {
        color: red;
      }
      .bar {
        font-weight: bold;
      }
    `;

    let style: any;
    const component = testHook(() => (style = useStyle(input)));

    const expectedStyle = { ...style };
    style = null;

    component.rerender();

    expect(style).toEqual(expectedStyle);
  });

  it("returns different style map on subsequent calls when style changes", () => {
    let color = "red";
    let fontWeight = "bold";
    const input = `
      .foo {
        color: ${color};
      }
      .bar {
        font-weight: ${fontWeight};
      }
    `;

    let style: any;
    const component = testHook(() => (style = useStyle(input)));

    const expectedStyle = { ...style };
    style = null;

    color = "green";
    fontWeight = "normal";

    component.rerender();

    expect(style).not.toEqual(expectedStyle);
  });
});
