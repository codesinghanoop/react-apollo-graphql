import React, { useEffect, useContext } from 'react'
import { View, Text, Pressable, StatusBar, Platform } from 'react-native'
import { SnackbarContext } from '../provider/snackbar'

const SnackBar =  () => {
    const value = useContext(SnackbarContext)

    useEffect(() => {
        setTimeout(() => {
            value?.dismissSnackbar()
        }, 4000)
    },[])

    if(!value?.isVisible) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text>{value?.message}</Text>
            <Pressable onPress={value?.dismissSnackbar}>
                <Text>X</Text>
            </Pressable>
        </View>
    )
}

export default SnackBar

export const StatusBarHeight = Platform.select({
    ios: 40,
    android: StatusBar.currentHeight,
    default: 0
})

const styles = {
    container: { 
        position: 'absolute', 
        bottom: 20,
        left: 10, 
        right: 10, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 8,
    }
}