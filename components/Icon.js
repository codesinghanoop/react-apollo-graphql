/* @flow */

import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';

const Icon = (name, tintColor) => (
  <MaterialIcons style={styles.icon} name={name} color={tintColor} size={24} />
);

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent',
  },
});

export default Icon;
