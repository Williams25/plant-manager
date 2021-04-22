import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../styles'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 20,
    marginTop: getStatusBarHeight(),
    paddingHorizontal: 20
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40
  }
})