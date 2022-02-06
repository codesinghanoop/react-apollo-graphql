import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import { APP_NAME, LOGIN_BUTTON, SIGNUP_BUTTON } from '@constants/Text'
import { PROFILE_LIST_SCREEN } from '@constants/Screens'
import Button from '@components/Button'
import styles from './style'


class Login extends Component {

    navigateToSearch = () => {
        this.props.navigation.navigate(PROFILE_LIST_SCREEN)
    }

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.appNameText}>
                    {APP_NAME}
                </Text>
                <View style={styles.ButtonContainer}>
                    <Button onPress={this.navigateToSearch} style={styles.button} text={LOGIN_BUTTON} />
                    <Button onPress={this.navigateToSearch} style={styles.button} text={SIGNUP_BUTTON} />
                </View>
            </View>
        )
    }
}

export default Login
