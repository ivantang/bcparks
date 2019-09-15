import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, StyleSheet } from 'react-native';


export function ActionSelect(props){
    return (
        <View style={{flex: 1, justifyContent: "flex-end", alignItems: "stretch"}}>
            <View style={{height: 300, backgroundColor: 'steelblue'}}>
                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => props.navigation.navigate('DonationList')}>
                    <Text style={{ fontFamily: 'roboto-medium', fontSize: 15 }}>{props.firstButton.title}</Text>
                </Icon.Button>

                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => props.navigation.navigate('VolunteerList')}>
                    <Text style={{ fontFamily: 'roboto-medium', fontSize: 15 }}>{props.secondButton.title}</Text>
                </Icon.Button>
            </View>
        </View>
    );
}
