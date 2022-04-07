declare module LifeCounterState {
  interface PlayerCounterState {
    [counterType: string]: number
  }

  interface PlayerLifeState {
    value: number
    history: number[]
    counters: PlayerCounterState
  }

  interface SettingsState {
    defaultValue: number
  }

  interface GlobalState {
    players: PlayerLifeState[]
    settings: SettingsState
  }
}
