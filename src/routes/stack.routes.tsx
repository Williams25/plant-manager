import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Confirmation, UserIndentification, Welcome } from '../pages'
import { colors } from '../../styles'

const { Navigator, Screen } = createStackNavigator()

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.white
          }
        }}
      >
        <Screen name="Welcome" component={Welcome} />
        <Screen name="UserIndentification" component={UserIndentification} />
        <Screen name="Confirmation" component={Confirmation} />
      </Navigator>
    </NavigationContainer>
  )
}