import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native';

export function LoginButton(props) {
    const { icon, backgroundColor, text } = props
    return (
        <Icon.Button name={icon} backgroundColor={backgroundColor} onPress={() => props.navigation.navigate('Home')} >
            <Text style={{ fontFamily: 'roboto-medium', fontSize: 15 }}>{text}</Text>
        </Icon.Button>
    );
}
