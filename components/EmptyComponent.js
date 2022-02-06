import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import Fonts from '@themes/Fonts'
import Colors from '@themes/Colors'
import Metrics from '@themes/Metrices'

export default class EmptyComponent extends PureComponent {

  // Defaults for props
  static defaultProps = {}

  render () {
    const { title, subTitle } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subTitleText}>{subTitle}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleText: {
      ...Fonts.style.h3,
      color: Colors.primary_text,
      textAlign: 'center',
    },
    subTitleText: {
      ...Fonts.style.h4,
      color: Colors.primary_text,
      marginTop: Metrics.baseMargin,
      textAlign: 'center',
      marginBottom: Metrics.doubleBaseMargin
    },
})
