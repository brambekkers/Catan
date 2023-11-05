import { usePlayerStore } from './playerStore'
import { random } from './../utils/number'
export const useGameStore = defineStore('Game store', () => {
  // Store
  const logStore = useLogStore()
  const worldStore = useWorldStore()
  const playerStore = usePlayerStore()

  const gameState = ref('build')
  const gameStates = ref(['roll', 'build', 'trade', 'end'])
  const dices = ref([0, 0])

  const diceSum = computed(() => dices.value[0] + dices.value[1])

  const rollDice = () => {
    dices.value[0] = random(1, 7)
    dices.value[1] = random(1, 7)

    logStore.addLog('game', `Rolled ${diceSum.value} (${dices.value[0]} + ${dices.value[1]})`)
  }

  const playState = () => {
    if (gameState.value === 'roll') {
      rollDice()
      const tiles = worldStore.findTilesByNumber(diceSum.value)
      tiles.forEach((tile) => playerStore.getResourcesFromTile(tile))
    }
  }

  const nextGameState = () => {
    const index = gameStates.value.indexOf(gameState.value)
    gameState.value = gameStates.value[(index + 1) % gameStates.value.length]
    logStore.addLog('game', `Next game state: ${gameState.value}`)

    playState()
  }

  return { gameState, playState, nextGameState }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
}
