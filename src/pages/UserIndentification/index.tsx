import React, { useState } from 'react'
import {
  SafeAreaView, View, Text, TextInput, KeyboardAvoidingView, Platform,
  TouchableWithoutFeedback, Keyboard
} from 'react-native'
import { Button } from '../../components'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

export const UserIndentification: React.FC = () => {
  const [isFocused, setIsFocused] = useState<Boolean>(false)
  const [isFilled, setIsFilled] = useState<Boolean>(false)
  const [name, setName] = useState<String>('')

  const { navigate } = useNavigation()

  const handleToConfirmation = () => {
    navigate('Confirmation')
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputChange = (value: string) => {
    setIsFilled(!!value)
    setName(value)
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  {isFilled ? '😄' : '😃'}
                </Text>

                <Text style={styles.title}>
                  Como podemos{'\n'}chamar você?
                </Text>
              </View>

              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: 'green' }
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <View style={styles.footer}>
                <Button title="Confirmar" onPress={handleToConfirmation} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}