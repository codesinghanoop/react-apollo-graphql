import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import Icon from '@components/Icon'
import Colors from '@themes/Colors'

const Button = (config) => (
    <TouchableOpacity {...config}>
        {config.iconConfig.show ? Icon(config.iconConfig.icon, Colors.white) : null}
        <Text>{config.text}</Text>
    </TouchableOpacity>
)

Button.defaultProps = {
    iconConfig: { show: false }
}

export default Button;
