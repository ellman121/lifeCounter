import React from 'react'
import {Text, TouchableOpacityProps, View} from 'react-native'
import cond from 'cond-flow'
import styled from 'styled-components/native'
import {CSSObject} from 'styled-components'

import {usePlayer} from '../model/playerState'
import {Box, Stack} from '@mobily/stacks'

const TouchableZone = styled.TouchableOpacity(
  (p: TouchableOpacityProps & {position: 'left' | 'right'}) =>
    ({
      right: p.position === 'right' ? 0 : undefined,
      left: p.position === 'left' ? 0 : undefined,
      position: 'absolute',
      height: '90%',
      width: '50%',
    } as CSSObject),
)

const LifeCount = styled.Text({
  textAlign: 'center',
  margin: 8,
})

const Divider = () => (
  <View style={{margin: 4, width: 1, flex: 1, backgroundColor: 'green'}} />
)

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
        [true, '0deg'],
      ]) as string,
    },
  ],
})

const defaultPlayerState: PlayerState = {
  counters: {},
  life: {
    history: [20],
    value: 20,
  },
}

const PlayerBoard = (props: PlayerBoardProps) => {
  const player = usePlayer(defaultPlayerState)
  const transform = getTransform(props.rotation)

  return (
    <Box style={transform} flex="fluid">
      <Stack horizontal padding={4} divider={Divider()}>
        {player.state.life.history.map((v) => (
          <Text>{v}</Text>
        ))}
      </Stack>
      <Box alignSelf="center" flex="fluid" alignY="center">
        <LifeCount>{player.state.life.value}</LifeCount>
        <TouchableZone onPress={player.decrementLife} position="right" />
        <TouchableZone onPress={player.incrementLife} position="left" />
      </Box>
    </Box>
  )
}

export default PlayerBoard
