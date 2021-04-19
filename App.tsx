import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { Welcome } from './src/pages'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Welcome />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
