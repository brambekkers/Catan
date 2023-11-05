import { isNear } from './../utils/positions'
import { type Vector2 } from '../types/Vector'
import { type Corner, type Tile, type Edge } from '../types/World'

export const useWorldStore = defineStore('world store', () => {
  // Variables
  const tileTypes = ref(['sheep', 'wheat', 'wood', 'coal', 'stone'])

  const hexSize = 300 // Size of the hexagon in pixels
  const numRows = ref(12) // Number of rows
  const numCols = ref(12) // Number of columns
  const oceanRows = ref(2) // Number of columns
  const oceanCols = ref(2) // Number of columns
  const hexGrid = ref<Tile[][]>([])
  const corners = ref<Corner[]>([])
  const edges = ref<Edge[]>([])

  // Computed
  const offsetWorld = computed(() => ({
    y: hexSize / 1.5,
    x: hexSize / 2
  }))
  const worldSize = computed(() => ({
    x: hexGrid.value?.[0]?.length * hexSize * hexSpacing.x - offsetWorld.value.x,
    y: hexGrid.value?.length * hexSize * hexSpacing.y - offsetWorld.value.y
  }))

  const getRandomTileType = () => tileTypes.value[random(0, tileTypes.value.length)]

  const getTile = (row: number, col: number) => {
    return {
      gridY: row,
      gridX: col,
      size: hexSize,
      type: getRandomTileType(),
      number: random(2, 13),
      corners: [],
      ...calculateHexPosition(row, col, hexSize, offsetWorld.value)
    }
  }

  const getCorner = ({ x, y }: Vector2) => {
    const id = corners.value.length
    return {
      x,
      y,
      type: '',
      level: null,
      hexSize: hexSize,
      owner: null,
      tiles: [],
      edges: [],
      buildingDisabled: false,
      id
    }
  }

  const getEdge = (x1: number, y1: number, x2: number, y2: number, corners: number[]): Edge => {
    const id = edges.value.length
    return {
      hexSize,
      x1,
      y1,
      x2,
      y2,
      angle: calculateAngle(x1, y1, x2, y2, hexSize),
      color: null,
      owner: null,
      corners,
      id
    }
  }

  const createGrid = () => {
    const extraOceanRows = oceanRows.value * 2
    const extraOceanCols = oceanCols.value * 2
    const totalRows = numRows.value + extraOceanRows
    const totalCols = numCols.value + extraOceanCols
    for (let row = 0; row < totalRows; row++) {
      hexGrid.value[row] = []
      for (let col = 0; col < totalCols; col++) {
        hexGrid.value[row][col] = getTile(row, col)
      }
    }
  }

  const makeEdgesWater = () => {
    // make outer tiles of grid ocean tiles
    hexGrid.value.forEach((row, rowIndex) => {
      row.forEach((tile, colIndex) => {
        if (rowIndex < oceanRows.value || rowIndex >= numRows.value + oceanRows.value) {
          tile.type = 'ocean'
        }
        if (colIndex < oceanCols.value || colIndex >= numCols.value + oceanCols.value) {
          tile.type = 'ocean'
        }
      })
    })
  }

  const addCornerToTile = (tile: Tile, corner: Corner) => {
    corner.tiles.push(tile)
    tile.corners.push(corner)
  }

  const findCorner = (x: number, y: number) => {
    return corners.value.find((corner) => {
      return isNear(x, corner.x, 5) && isNear(y, corner.y, 5)
    })
  }

  const findEdge = (x1: number, y1: number, x2: number, y2: number) => {
    return edges.value.find((edge) => {
      return isNear(x1, edge.x1, 20) && isNear(x2, edge.x2, 20) && isNear(y1, edge.y1, 20) && isNear(y2, edge.y2, 20)
    })
  }

  const createCorners = () => {
    // loop over all tiles
    hexGrid.value.forEach((row) => {
      row.forEach((tile) => {
        // skip ocean tiles
        if (tile.type === 'ocean') return
        // get the corners of the hexagon tile
        const hexCorners = getHexCornersCoordinates(tile.x, tile.y, tile.size)
        // loop over all corners
        hexCorners.forEach((hexCorner) => {
          // check if the corner is already in the array
          let corner = findCorner(hexCorner.x, hexCorner.y)
          // if the corner doesn't exist, add it to the array
          if (!corner) {
            corner = getCorner(hexCorner)
            // add the corner to the corner array
            corners.value.push(corner)
          }
          addCornerToTile(tile, corner)
        })
      })
    })
  }

  const getCornersOfTiles = (tiles: Tile[]) => {
    return tiles.flatMap((tile) => tile.corners)
  }

  const createEdges = () => {
    corners.value.forEach((corner) => {
      // get all corners of the tiles of the corner
      const unfilteredCorners = getCornersOfTiles(corner.tiles)
      const uniqueCorderIds = [...new Set(unfilteredCorners.map((c) => c.id))]
      const possibleCorners = uniqueCorderIds.map((id) => corners.value.find((c) => c.id === id))

      const dist = hexSize / 2
      const nearbyCorners = possibleCorners.filter(
        (posCor) => isNear(corner.x, posCor.x, dist) && isNear(corner.y, posCor.y, dist) && corner.id !== posCor.id
      )

      nearbyCorners.forEach((nearbyCorner) => {
        if (!nearbyCorner) return
        let edge: Edge | undefined = findEdge(nearbyCorner.x, nearbyCorner.y, corner.x, corner.y)
        if (!edge) {
          edge = getEdge(corner.x, corner.y, nearbyCorner.x, nearbyCorner.y, [corner.id, nearbyCorner.id])
          edges.value.push(edge)
        }
        corner.edges.push(edge)
      })
    })
  }
  const createLevel = () => {
    createGrid()
    makeEdgesWater()
    createCorners()
    createEdges()
  }

  const findTilesByNumber = (number: number): Tile[] => {
    const tiles: Tile[] = []
    hexGrid.value.forEach((row) => {
      row.forEach((tile) => {
        if (tile.number === number) {
          tiles.push(tile)
        }
      })
    })
    return tiles
  }

  createLevel()
  return { hexGrid, corners, edges, worldSize, findTilesByNumber }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWorldStore, import.meta.hot))
}
