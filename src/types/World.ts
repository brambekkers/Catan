export interface Corner {
  id: number
  x: number
  y: number
  type: string
  level: number
  hexSize: number
  color: string | null
  buildingDisabled: boolean
  owner: number | null
  tiles: Tile[]
  edges: Edge[]
}

export interface Edge {
  id: number
  x1: number
  y1: number
  x2: number
  y2: number
  angle: number
  owner: number | null
  color: string | null
  corners: number[]
  hexSize: number
}

export interface Tile {
  gridY: number
  gridX: number
  size: number
  type: string
  number: number
  x: number
  y: number
  center: { x: number; y: number }
  corners: Corner[]
}
