import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native';

export function LoginButton(props) {
    const { icon, backgroundColor, text } = props
    return (

        <Icon.Button name={icon} backgroundColor={backgroundColor} onPress={() => props.navigation.navigate('Home')} style={{align: 'center'}}>
            <Text style={{ alignSelf: 'center', fontFamily: 'roboto-medium', fontSize: 20, padding: 20, color: 'white'}}>{text}</Text>
        </Icon.Button>
    );
}
