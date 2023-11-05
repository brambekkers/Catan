import { Vector2 } from '../types/vector'

// Spacing between hexagons in pixels
export const hexSpacing = {
  x: 0.638,
  y: 0.721
}

export const calculateHexPosition = (row: number, col: number, hexSize: number, offsetWorld: Vector2) => {
  const x = col * hexSpacing.x * hexSize - offsetWorld.x
  let y = row * hexSpacing.y * hexSize - offsetWorld.y
  // Offset every other column
  if (col % 2 === 1) {
    y += (hexSpacing.y / 2) * hexSize
  }

  const center = { x: x + hexSize / 2, y: y + hexSize / 2 }
  return { x: x, y: y, center }
}

export const getHexCornersCoordinates = (tileX: number, tileY: number, size: number) => {
  const corners = []
  for (let i = 0; i < 6; i++) {
    const angleDegrees = 60 * i
    const angleRadians = (Math.PI / 180) * angleDegrees
    const x = tileX + (size / 2.4) * Math.cos(angleRadians) + size / 2
    const y = tileY + (size / 2.4) * Math.sin(angleRadians) + size / 2
    corners.push({ x, y })
  }

  return corners
}
