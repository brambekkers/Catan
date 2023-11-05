import { type Player, type BuildType, type Price } from '../types/Player'
import { type Tile } from '../types/World'
import { prices } from '../constants/prices'

export const usePlayerStore = defineStore('player store', () => {
  // Store
  const worldStore = useWorldStore()
  const logStore = useLogStore()

  // Variables
  const currentPlayerIndex = ref(0)
  const players = ref<Player[]>([
    {
      name: 'Player 1',
      id: 0,
      color: 'red',
      locations: [],
      resources: {
        wood: 100,
        stone: 100,
        wheat: 100,
        sheep: 100,
        coal: 100
      }
    }
  ])

  const currentPlayer = computed(() => players.value[currentPlayerIndex.value])
  const resources = computed(() => players.value[0].resources)

  const canPay = (price: Price) => {
    for (const key in price) {
      const resources = currentPlayer.value.resources
      if (resources[key] - price[key] < 0) {
        return false
      }
    }
    return true
  }

  const payPrice = (price: Price) => {
    for (const key in price) {
      resources.value[key] -= price[key]
    }
  }

  const buildHouse = (id: number) => {
    currentPlayer.value.locations.push({
      id,
      type: 'house',
      level: 0
    })
    let corner = worldStore.corners[id]
    corner.owner = currentPlayer.value.id
    corner.color = currentPlayer.value.color

    // Update corner
    worldStore.corners[id] = {
      ...corner,
      owner: 0,
      type: 'house',
      level: 0
    }

    // Disable building on corners that are next to this corner
    corner.edges.forEach((edge) => {
      edge.corners.forEach((cID) => {
        worldStore.corners[cID].buildingDisabled = true
      })
    })
  }

  const buildRoad = (id: number) => {
    const edge = worldStore.edges[id]
    edge.owner = currentPlayer.value.id
    edge.color = currentPlayer.value.color
  }

  const build = (id: number, type: BuildType) => {
    // Check if player can pay the price
    const price = prices[type][0]
    if (!canPay(price)) {
      console.log(`You can't pay the price`)
      return
    }
    // Pay the price
    payPrice(price)

    // Build the thing
    if (type === 'house') {
      buildHouse(id)
    }

    if (type === 'road') {
      buildRoad(id)
    }
  }

  const getResourcesFromTile = (tile: Tile) => {
    tile.corners.forEach((tileCorner) => {
      const corner = worldStore.corners[tileCorner.id]
      // Check if corner has an owner
      if (corner.owner === null) return

      const player = players.value[corner.owner]
      // Add resources to player
      const amount = 1
      player.resources[tile.type] += amount
      logStore.addLog('player', `${player.name}: gets ${amount} ${tile.type}`)
    })
  }

  return { currentPlayer, resources, build, getResourcesFromTile }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot))
}
