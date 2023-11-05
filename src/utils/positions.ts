export const isNear = (a: number, b: number, margin: number) => {
  return Math.abs(a - b) < margin
}
