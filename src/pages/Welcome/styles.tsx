import { StyleSheet, Dimensions } from 'react-native'
import { colors, fonts } from '../../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: 'bold',
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  image: {
    width: Dimensions.get('window').width * 7
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.text,
    paddingHorizontal: 20,
    color: colors.heading
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    width: 60,
    height: 60
  },
})