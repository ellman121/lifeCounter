import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: LifeCounterState.GlobalState = {
  players: [
    {
      counters: {},
      history: [],
      value: 20,
    },
    {
      counters: {},
      history: [],
      value: 20,
    },
  ],
  settings: {
    defaultValue: 20,
  },
}

const lifeSlice = createSlice({
  name: 'lifeCounterState',
  initialState,
  reducers: {
    setSettings: (
      state,
      action: PayloadAction<LifeCounterState.SettingsState>,
    ) => {
      state.settings = action.payload
    },
    setPlayerState: (
      state,
      action: PayloadAction<{
        index: number
        nextState: LifeCounterState.PlayerLifeState
      }>,
    ) => {
      state.players[action.payload.index] = action.payload.nextState
    },
  },
})

export const {setPlayerState, setSettings} = lifeSlice.actions

export default lifeSlice
