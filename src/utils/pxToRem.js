/**
 * Convert Pixels to rem
 * @param pixels - Pixels value to be converted
 * @returns The converted rem value
 */
export function pxToRem(pixels) {
  return `${pixels / 16}rem`
}