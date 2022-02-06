import React from 'react'
import {
    StyleSheet
} from 'react-native'
import Font from '@themes/Fonts'
import GlobalStyle from '@themes/globalStyle'
import Metrices from '@themes/Metrices'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    appNameText: {
        ...Font.style.h2
    },
    ButtonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        ...GlobalStyle.button,
        marginTop: Metrices.doubleBaseMargin,
        textAlign: 'center'
    }
})

export default styles
