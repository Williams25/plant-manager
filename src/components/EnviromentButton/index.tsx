import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './styles'

interface EnviromentButtonProps extends RectButtonProps {
  title: string
  active?: boolean
}

export const EnviromentButton = ({ title, active = false, ...rest }: EnviromentButtonProps) => {
  const { navigate } = useNavigation()

  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.text,
        active && styles.textActive
      ]} >{title}</Text>
    </RectButton>
  )
}