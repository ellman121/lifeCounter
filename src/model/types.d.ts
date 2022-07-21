interface PlayerState {
  life: {
    value: number
    history: number[]
  }
  counters: {}
}

interface SettingsState {
  defaultPlayerState: PlayerState
}
