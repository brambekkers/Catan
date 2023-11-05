export const random = (min: number = 0, max: number = 1) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const calculateAngle = (x1: number, y1: number, x2: number, y2: number, hexSize: number) => {
  const isHigher = y1 > y2
  const isFurther = x1 > x2
  const isCloseY = isNear(y1, y2, 10)

  const breakpoint = hexSize / 3
  const distX = Math.abs(x1 - x2)
  const isShortDist = distX < breakpoint

  if (isCloseY && !isFurther && !isShortDist) return 270
  if (isCloseY && isFurther && !isShortDist) return 90
  if (isHigher && !isFurther && isShortDist) return 210
  if (isHigher && isFurther && isShortDist) return 150
  if (!isHigher && isFurther && isShortDist) return 30
  if (!isHigher && !isFurther) return 330
  return 0
}
