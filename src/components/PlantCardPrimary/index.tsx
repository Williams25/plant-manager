import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { SvgFromUri } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string,
    photo: string
  }
}

export const PlantCardPrimary = ({ data, ...rest }: PlantCardPrimaryProps) => {

  return (
    <RectButton style={styles.container}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Text style={styles.text}>
        {data.name}
      </Text>
    </RectButton>
  )
}