import React from 'react'
import PlayerBoard from '../components/PlayerBoard'

interface MainScreenProps {}

export const MainScreen = (props: MainScreenProps) => {
  return (
    <>
      <PlayerBoard index={0} rotation="Bottom" />
      <PlayerBoard index={1} rotation="Bottom" />
    </>
  )
}
