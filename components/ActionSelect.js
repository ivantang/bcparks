import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, StyleSheet } from 'react-native';


export function ActionSelect({firstButton, secondButton}){
    return (
        <View style={{flex: 1, justifyContent: "flex-end", alignItems: "stretch"}}>
            <View style={{height: 300, backgroundColor: 'steelblue'}}>
                <Icon.Button name="facebook" backgroundColor="#3b5998">
                    <Text style={{ fontFamily: 'roboto-black', fontSize: 15 }}>{firstButton.title}</Text>
                </Icon.Button>

                <Icon.Button name="facebook" backgroundColor="#3b5998">
                    <Text style={{ fontFamily: 'roboto-black', fontSize: 15 }}>{secondButton.title}</Text>
                </Icon.Button>
            </View>
        </View>
    );
}
