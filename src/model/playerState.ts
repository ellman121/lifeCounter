import R from 'ramda'
import {useState} from 'react'
import {shiftArray} from './utils'

let currentTimeout: NodeJS.Timeout | undefined = undefined

const assocValue = R.assocPath<number, PlayerState>(['life', 'value'])
const assocHistory = R.assocPath<number[], PlayerState>(['life', 'history'])

export function usePlayer(defaultState: PlayerState) {
  const [currentState, setCurrentState] = useState(defaultState)

  const trackLife = (operation: 'increment' | 'decrement') => () => {
    const nextState = assocValue(
      operation === 'increment'
        ? currentState.life.value + 1
        : currentState.life.value - 1,
      currentState,
    )
    setCurrentState(nextState)

    if (currentTimeout !== undefined) {
      clearTimeout(currentTimeout)
    }
    currentTimeout = setTimeout(() => {
      setCurrentState(
        assocHistory(
          shiftArray(nextState.life.history, nextState.life.value, 5),
          nextState,
        ),
      )
    }, 2500)
  }

  return {
    state: currentState,
    incrementLife: trackLife('increment'),
    decrementLife: trackLife('decrement'),
  }
}
