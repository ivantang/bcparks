import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native';

export function LoginButton(props) {
    const { icon, backgroundColor, text } = props
    return (
        <Icon.Button name={icon} backgroundColor={backgroundColor}>
            <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>{text}</Text>
        </Icon.Button>
    );
}
