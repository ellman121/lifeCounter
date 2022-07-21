import R from 'ramda'
import {useDispatch, useSelector} from 'react-redux'
import {setPlayerState} from './lifeSlice'

const shift = (list: number[], n: number) => R.append(n, R.takeLast(4, list))

export function usePlayerState(index: number) {
  const dispatch = useDispatch()
  const playerState = useSelector<
    LifeCounterState.GlobalState,
    LifeCounterState.PlayerLifeState
  >((state: LifeCounterState.GlobalState) => state.players[index])

  if (playerState === undefined) {
    throw new Error('Undefined Player Index')
  }

  return {
    current: playerState,
    setLifeCount: (nextValue: number) =>
      dispatch(
        setPlayerState({
          index,
          nextState: {
            counters: playerState.counters,
            history: shift(playerState.history, playerState.value),
            value: nextValue,
          },
        }),
      ),
  }
}
