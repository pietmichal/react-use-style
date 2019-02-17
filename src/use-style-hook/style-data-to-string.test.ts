import { css } from "./css-tag";
import { styleDataToString } from "./style-data-to-string";

describe("styleDataToString()", () => {
  it("returns a string representation of a style that does not use variables", () => {
    const input = css`
      .foo {
        color: red;
      }
      .bar {
        font-weight: bold;
      }
    `;
    const result = styleDataToString(input);
    expect(result).toEqual(`
      .foo {
        color: red;
      }
      .bar {
        font-weight: bold;
      }
    `);
  });

  it("returns a string representation of a style that uses variables", () => {
    const input = css`
      .foo {
        color: ${"red"};
      }
      .bar {
        font-weight: ${"bold"};
      }
    `;
    const result = styleDataToString(input);
    expect(result).toEqual(`
      .foo {
        color: red;
      }
      .bar {
        font-weight: bold;
      }
    `);
  });
});
