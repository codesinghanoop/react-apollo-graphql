import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '@themes/Colors'
import Metrices from '@themes/Metrices'
import { FAV_LIST_SCREEN } from '@constants/Screens'

const ListItem = ({item, navigate}) => (
    <TouchableOpacity style={styles.container} onPress={() => navigate(item.node)} >
        <Image source={{ uri: item.node.avatarUrl }} style={styles.image} />
        <Text>{item.node.name}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 60,
        backgroundColor: Colors.light_blue,
        flexDirection: 'row',
        marginTop: Metrices.doubleBaseMargin,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: Metrices.baseMargin,
        marginLeft: Metrices.baseMargin
    }
})

export default ListItem
