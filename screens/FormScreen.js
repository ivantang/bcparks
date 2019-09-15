import {ScrollView, TextInput, View, KeyboardAvoidingView, Text} from "react-native";
import React, { Component } from 'react';

export default function FormScreen() {
    const [parkValue, onChangePark] = React.useState('Juniper Beach Provincial Park');
    const [descValue, onChangeDesc] = React.useState('Briefly Describe The Issue');
    const [volunteerValue, onChangeVolunteers] = React.useState('');

    return (
        <KeyboardAvoidingView
            behavior="padding">
                <Text style={{margin: 25}}/>
                <Text style={{marginHorizontal: 10, marginBottom: 6, color: "#ACACAC"}}>LOCATION</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10 }}
                    onChangePark={text => onChangePark(text)}
                    parkValue={parkValue}
                />
                <Text style={{margin: 15}}/>
                <Text style={{marginHorizontal: 10, marginBottom: 6, color: "#ACACAC"}}>ISSUE</Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    style={{ height: 100, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10 }}
                    onChangeDesc={text => onChangeDesc(text)}
                    descValue={descValue}
                />
                <Text style={{margin: 15}}/>
                <Text style={{marginHorizontal: 10, marginBottom: 6, color: "#ACACAC"}}>NUMBER OF VOLUNTEERS</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10 }}
                    onChangeVolunteers={text => onChangeVolunteers(text)}
                    volunteerValue={volunteerValue}
                />
            <View style={{ height: 60 }} />
        </KeyboardAvoidingView>

    );
}
