import { TextInput, View, Text, Platform, Button, Keyboard} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Dropdown } from 'react-native-material-dropdown';
import { IssueHeader } from '../components/Header';

import React, { Component } from 'react';

export default function FormScreen() {
    const [parkValue, onChangePark] = React.useState('Juniper Beach Provincial Park');
    const [descValue, onChangeDesc] = React.useState('Briefly Describe The Issue');
    const [volunteerValue, onChangeVolunteers] = React.useState('');
    const urgency = [{
        value: 'Critical',
    }, {
        value: 'Major',
    }, {
        value: 'Minor',
    }, {
        value: 'Nice To Have',
    }];

    return (
        <KeyboardAwareScrollView>
                <IssueHeader />
                <Text style={{marginHorizontal: 15, marginBottom: 6, color: "#ACACAC", marginTop: -50}}>LOCATION</Text>
                <TextInput
                    style={{ color: "#707070", padding: 8, borderColor: '#F8F8F8', borderRadius: 10, backgroundColor:'#F8F8F8', height: 40, borderWidth: 1, marginHorizontal: 15, fontSize: 20}}
                    onChangePark={text => onChangePark(text)}
                    parkValue={parkValue}
                    placeholder={"Enter Park Location"}
                />
                <Text style={{margin: 15}}/>
                <Text style={{marginHorizontal: 15, marginBottom: 6, color: "#ACACAC"}}>ISSUE</Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    blurOnSubmit={true}
                    style={{ color: "#707070",paddingLeft: 8,height: 100, borderColor: '#F8F8F8', backgroundColor:'#F8F8F8', borderRadius: 10, borderWidth: 1, marginHorizontal: 15, fontSize: 20 }}
                    onChangeDesc={text => onChangeDesc(text)}
                    descValue={descValue}
                    placeholder={"Briefly Describe The Issue"}
                />
                <View style={{margin: 10}}/>
                <Dropdown
                    fontSize={20}
                    containerStyle={{marginHorizontal:15}}
                    label='URGENCY'
                    labelFontSize={14}
                    data={urgency}
                    placeholder={"Urgency Level"}
                />
                <View style={{margin: 10}}/>
                <Text style={{marginHorizontal: 15, marginBottom: 6, color: "#ACACAC"}}>NUMBER OF VOLUNTEERS</Text>
                <TextInput
                    style={{ color: "#707070",paddingLeft: 8,borderColor: '#F8F8F8', backgroundColor:'#F8F8F8', borderRadius: 10, height: 40, borderWidth: 1, marginHorizontal: 15, fontSize: 20 }}
                    onChangeVolunteers={text => onChangeVolunteers(text)}
                    volunteerValue={volunteerValue}
                    placeholder={"Volunteers Needed"}
                />
                <View style={{flex:1}} />

        </KeyboardAwareScrollView>

    );
}
