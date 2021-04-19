import React from 'react'
import { SafeAreaView, Text, Image, TouchableOpacity } from 'react-native'
import watering from '../../assets/watering.png'
import { styles } from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

export const Welcome: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>
      <Image
        style={styles.image}
        source={watering} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <RectButton
        style={styles.button}
      >
        <Feather name="arrow-right" size={28} color="#fff" />
      </RectButton>
    </SafeAreaView>
  )
}