import { useRef } from "react";
import { generateStyle } from "../style-generator/style-generator";
import { areArraysEqual } from "./are-arrays-equal";
import { styleDataToString } from "./style-data-to-string";
import { IStyleData } from "./style-data.interface";

interface IStyle {
  [className: string]: string;
}

export function useStyle<TStyle = IStyle>(data: IStyleData): TStyle {
  const variables = useRef<any[] | null>(null);
  const style = useRef<TStyle>({} as any);

  if (variables.current === null) {
    variables.current = data.variables;
    style.current = generateStyle<TStyle>(styleDataToString(data));
    return style.current;
  }

  if (areArraysEqual(variables.current, data.variables)) {
    return style.current;
  }

  variables.current = data.variables;
  style.current = generateStyle<TStyle>(styleDataToString(data));
  return style.current;
}
