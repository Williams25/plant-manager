import React, { ReactNode } from 'react'
import { StyleProp, ViewStyle, Text, TouchableOpacity } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './styles'

interface ButtonProps extends RectButtonProps{
  title: string
  style?: StyleProp<ViewStyle>
}

export const Button = ({ style, title, ...rest }: ButtonProps) => {
  return (
      <RectButton
        style={[style, styles.button]}
        {...rest}
      >
        <Text style={styles.text} >{title}</Text>
      </RectButton>
  )
}