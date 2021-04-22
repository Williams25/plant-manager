import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'
import loading from '../../assets/load.json'
import { styles } from './styles'

export const Load = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={loading}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  )
}