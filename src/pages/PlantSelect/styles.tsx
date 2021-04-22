import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtile: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20,
  },
  contentFlatList: {
    marginHorizontal: 32,
  },
  enviromentList: {
    height: 49,
    justifyContent: 'flex-end',
    paddingBottom: 5,
    marginVertical: 32,
  },
  contentPlants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
  plantItem: {
    justifyContent: 'center'
  }
})