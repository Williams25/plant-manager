import { StyleSheet, Dimensions } from 'react-native'
import { colors, fonts } from '../../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {

  },
  emoji: {
    textAlign: 'center',
    fontSize: 78
  },
  title: {
    fontSize: 26,
    fontFamily: fonts.heading,
    color: colors.heading,
    textAlign: 'center',
    lineHeight: 38,
    marginTop: 20
  },
  subTitle: {
    fontSize: 22,
    fontFamily: fonts.text,
    color: colors.heading,
    textAlign: 'center',
    lineHeight: 38,
    marginTop: 10,
    paddingHorizontal: 10
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginBottom: 20,
  }
})