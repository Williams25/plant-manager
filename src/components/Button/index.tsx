import React, { ReactNode } from 'react'
import { StyleProp, ViewStyle, Text, TouchableOpacity } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { styles } from './styles'

interface ButtonProps {
  title: string
  style?: StyleProp<ViewStyle>
  onPress?: () => void
}

export const Button = ({ style, title, onPress, ...rest }: ButtonProps) => {
  return (
    <RectButton
      style={[style, styles.button]}
      {...rest}
    >
      <Text style={styles.text} >{title}</Text>
    </RectButton>
  )
}