export function areArraysEqual(arr1: any[], arr2: any[]): boolean {
  return arr1.every((value, index) => arr2[index] === value);
}
