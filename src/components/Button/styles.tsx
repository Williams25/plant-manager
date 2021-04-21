import { StyleSheet, Dimensions } from 'react-native'
import { colors, fonts } from '../../../styles'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    height: 56,
    width: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.heading
  }
})