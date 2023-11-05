export type Resource = 'wood' | 'stone' | 'wheat' | 'sheep' | 'coal'
export type BuildType = 'road' | 'house'

export interface PlayerLocations {
  id: number
  type: BuildType
  level: number
}

export interface Price {
  [key: Resource]: number
}

export interface Player {
  id: number
  name: string
  color: string
  locations: PlayerLocations[]
  resources: {
    [key in Resource]: number
  }
}
