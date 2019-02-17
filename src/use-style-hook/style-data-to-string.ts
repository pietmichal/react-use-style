import { IStyleData } from "./style-data.interface";

// note: naive implementation - what if someone uses a variable at the beginning of the string?
export function styleDataToString(data: IStyleData): string {
  const str = data.strings
    .map((str, index) => {
      return str + (data.variables[index] ? data.variables[index] : "");
    })
    .join("");
  return str;
}
