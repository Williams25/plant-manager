import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../styles'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 15,
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  textActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    fontSize: 16,
    fontWeight: 'bold'
  }
})