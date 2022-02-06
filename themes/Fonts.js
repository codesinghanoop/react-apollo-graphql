import { Platform, PixelRatio, Dimensions } from 'react-native'
import Colors from './Colors'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

// // based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320

export function normalize (size) {
  const newSize = scale * size
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return size
  }
}

const size = {
  h1: normalize(34),
  h2: normalize(24),
  h3: normalize(20),
  h4: normalize(16),
  regular: normalize(14),
  medium: normalize(13),
  small: normalize(12),
  tiny: normalize(10),
  superTiny: normalize(8)
}

const style = {
  h1: {
    fontSize: size.h1,
    fontWeight: 'normal'
  },
  h2: {
    fontSize: size.h2,
    fontWeight: 'normal',
  },
  h3: {
    fontSize: size.h3,
    fontWeight: 'normal'
  },
  normal: {
    fontSize: size.regular,
    fontWeight: 'normal'
  },
  boldLabel: {
    fontSize: size.regular,
    fontWeight: 'bold'
  },
  h4: {
    fontSize: size.h4,
    fontWeight: 'normal'
  },
  h4Medium: {
    fontSize: size.h4,
    fontWeight: 'normal'
  },
  mediumLabel: {
    fontSize: size.medium,
    fontWeight: 'normal'
  },
  labels: {
    fontSize: size.tiny,
    fontWeight: 'normal',
    color: Colors.labels
  },
  tinyLabels: {
    fontSize: size.superTiny,
    fontWeight: 'normal',
    color: Colors.labels
  },
  smallLabels: {
    fontSize: size.small,
    fontWeight: 'normal',
    color: Colors.labels
  }
}

export default {
  size,
  style
}
