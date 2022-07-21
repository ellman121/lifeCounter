import React from 'react'
import cond from 'cond-flow'
import styled from 'styled-components/native'

import {usePlayerState} from '../model/hooks'
import LifeCount from './LifeCount'

const Background = styled.View({
  backgroundColor: 'green',
  flex: 1,
})

type PlayerBoardPosition = 'Top' | 'Bottom'

interface PlayerBoardProps {
  index: number
  rotation: PlayerBoardPosition
}

const getTransform = (r: PlayerBoardPosition) => ({
  transform: [
    {
      rotate: cond([
        [r === 'Top', '180deg'],
        [r === 'Bottom', '0deg'],
        [true, '0deg'],
      ]) as string,
    },
  ],
})

const PlayerBoard = (props: PlayerBoardProps) => {
  const playerState = usePlayerState(props.index)
  const transform = getTransform(props.rotation)

  return (
    <Background style={transform}>
      <LifeCount
        value={playerState.current.value}
        onIncrement={() =>
          playerState.setLifeCount(playerState.current.value + 1)
        }
        onDecrement={() =>
          playerState.setLifeCount(playerState.current.value - 1)
        }
      />
    </Background>
  )
}

export default PlayerBoard
