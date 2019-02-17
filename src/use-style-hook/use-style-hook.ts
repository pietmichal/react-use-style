import { useRef } from "react";
import { generateStyle } from "../style-generator/style-generator";

interface IStyle {
  [className: string]: string;
}

interface IStyleData {
  strings: TemplateStringsArray;
  variables: any[];
}

export function useStyle<TStyle = IStyle>(data: IStyleData): TStyle {
  const variables = useRef<any[] | null>(null);
  const style = useRef<TStyle>({} as any);

  if (variables.current === null) {
    variables.current = data.variables;
    style.current = generateStyle<TStyle>(getStyleCssRepresentation(data));
    return style.current;
  }

  if (areArraysEqual(variables.current, data.variables)) {
    return style.current;
  }

  variables.current = data.variables;
  style.current = generateStyle<TStyle>(getStyleCssRepresentation(data));
  return style.current;
}

export function css(strings: TemplateStringsArray, ...variables: any[]): IStyleData {
  return {
    strings,
    variables
  };
}

// note: naive implementation - what if someone uses a variable at the beginning of the string?
function getStyleCssRepresentation(data: IStyleData): string {
  const str = data.strings
    .map((str, index) => {
      return str + (data.variables[index] ? data.variables[index] : "");
    })
    .join("");
  return str;
}

function areArraysEqual(arr1: any[], arr2: any[]) {
  return arr1.every((value, index) => arr2[index] === value);
}
