import React from 'react'
import {
    StyleSheet
} from 'react-native'
import Metrices from '@themes/Metrices'
import Fonts from '@themes/Fonts'
import GlobalStyle from '@themes/globalStyle'
import Colors from '@themes/Colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        flex: 1,
    },
    coverPic: {
        resizeMode: 'cover',
        width: '100%',
        height: 200,
        marginTop: Metrices.baseMargin
    },
    detailsSection: {
        flexDirection: 'row',
        width: '100%',
        margin: Metrices.baseMargin,
        height: 60,
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    detailsContainer: {
        width: '100%'
    },
    fieldName: {
        ...Fonts.style.boldLabel
    },
    repoContainer: {

    },
    repoField: {
        ...Fonts.style.boldLabel,
        textAlign: 'center'
    },
    repoItemContainer: {
        width: '100%',
        margin: Metrices.doubleBaseMargin,
        paddingBottom: 12,
        borderColor: 'gray',
        borderBottomWidth: 0.5
    },
    repoDetails: {
        flexDirection: 'row',
        marginBottom: 4
    },
    button: {
        ...GlobalStyle.button,
        marginTop: Metrices.doubleBaseMargin,
        textAlign: 'center',
        alignSelf: 'center'
    },
    input: {
        width: '90%',
        height: 40,
        borderRadius: 30,
        borderColor: Colors.primary,
        borderWidth: 2,
        marginTop: Metrices.doubleBaseMargin,
        alignSelf: 'center',
        padding: Metrices.baseMargin
    }
})

export default styles
