import React from 'react'
import { SafeAreaView, Text, Image, View } from 'react-native'
import watering from '../../assets/watering.png'
import { styles } from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export const Welcome: React.FC = () => {
  const { navigate } = useNavigation()

  const handleToUserIndentification = () => {
    navigate('UserIndentification')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>
        <Image
          style={styles.image}
          source={watering}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <RectButton
          style={styles.button}
          onPress={handleToUserIndentification}
        >
          <Feather name="arrow-right" size={28} color="#fff" />
        </RectButton>
      </View>
    </SafeAreaView>
  )
}