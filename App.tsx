import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'
import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { AppStack } from './src/routes/stack.routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <SafeAreaView style={styles.container}>
      <AppStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
