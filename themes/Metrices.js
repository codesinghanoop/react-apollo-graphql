import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 8,
  marginVertical: 8,
  section: 25,
  baseMargin: 8,
  doubleBaseMargin: 16,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 66 : 56,
  buttonRadius: 8,
  borderRadius: 4,
  borderWidth: 2,
  basePadding: 8,
  mediumPadding: 12,
  doubleBasePadding: 16,
  icons: {
    superTiny: 12,
    tiny: 16,
    small: 20,
    medium: 24,
    large: 30,
    xl: 48,
    xxl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export default metrics
