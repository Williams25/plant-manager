import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import perfil from '../../assets/perfil.png'

interface HeaderProps {
  name: string
}

export const Header = ({ name }: HeaderProps) => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.userName}>{name}</Text>
      </View>

      <Image source={perfil} style={styles.image} />
    </View>
  )
}