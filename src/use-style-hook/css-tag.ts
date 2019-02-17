export function css(strings: TemplateStringsArray, ...variables: any[]): IStyleData {
  return {
    strings,
    variables
  };
}
