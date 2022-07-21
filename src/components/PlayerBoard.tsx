import React from 'react'
import cond from 'cond-flow'
import styled from 'styled-components/native'

import {usePlayer} from '../model/playerState'
import LifeCount from './LifeCount'
import {Text} from 'react-native'

const Background = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
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

const defaultPlayerState: PlayerState = {
  counters: {},
  life: {
    history: [],
    value: 20,
  },
}

const PlayerBoard = (props: PlayerBoardProps) => {
  const player = usePlayer(defaultPlayerState)
  const transform = getTransform(props.rotation)

  return (
    <Background style={transform}>
      <LifeCount
        value={player.state.life.value}
        onIncrement={player.incrementLife}
        onDecrement={player.decrementLife}
      />
      <Text>{JSON.stringify(player.state.life.history)}</Text>
    </Background>
  )
}

export default PlayerBoard
