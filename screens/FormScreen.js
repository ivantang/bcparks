import { TextInput, View, Text, Platform, Button, Keyboard} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import React, { Component } from 'react';

export default function FormScreen() {
    const [parkValue, onChangePark] = React.useState('Juniper Beach Provincial Park');
    const [descValue, onChangeDesc] = React.useState('Briefly Describe The Issue');
    const [volunteerValue, onChangeVolunteers] = React.useState('');

    return (
        <KeyboardAwareScrollView>
                <Text style={{margin: 25}}/>
                <Text style={{marginHorizontal: 10, marginBottom: 6, color: "#ACACAC"}}>LOCATION</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10, fontSize: 20}}
                    onChangePark={text => onChangePark(text)}
                    parkValue={parkValue}
                />
                <Text style={{margin: 15}}/>
                <Text style={{marginHorizontal: 10, marginBottom: 6, color: "#ACACAC"}}>ISSUE</Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    blurOnSubmit={true}
                    style={{ height: 100, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10, fontSize: 20 }}
                    onChangeDesc={text => onChangeDesc(text)}
                    descValue={descValue}
                />
                <Text style={{margin: 15}}/>
                <Text style={{marginHorizontal: 10, marginBottom: 6, color: "#ACACAC"}}>NUMBER OF VOLUNTEERS</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10, fontSize: 20 }}
                    onChangeVolunteers={text => onChangeVolunteers(text)}
                    volunteerValue={volunteerValue}
                />
                <View style={{flex:1}} />
        </KeyboardAwareScrollView>

    );
}
