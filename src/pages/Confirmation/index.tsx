import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { Button } from '../../components'
import { styles } from './styles'

export const Confirmation = () => {
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😄
        </Text>
        <Text style={styles.title}>
          Prontinho
        </Text>
        <Text style={styles.subTitle}>
          Agora vamos começar a cuidar das suas platinhas com muito cuidado
        </Text>
      </View>
      <View style={styles.footer}>
        <Button title="Começar" />
      </View>
    </SafeAreaView>
  )
}