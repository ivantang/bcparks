import Form from 'react-native-form';
import {ScrollView, TextInput, View, Switch, Slider, DatePickerIOS, Picker, PickerIOS, StyleSheet} from "react-native";
import React from "react";

export default function FormScreen() {
    return (
        <Form ref="form">
            <View>
                <View>
                    <TextInput type="TextInput" name="myTextInput" /> // Yes, it doesn't matter how deep they are :)
                </View>
            </View>
            <Switch type="Switch" name="mySwitch" />
            <Slider type="Slider" name="mySlider" />
            <DatePickerIOS type="DatePickerIOS" name="myBirthday" />
            <Picker type="Picker" name="myPicker" />
            <PickerIOS type="PickerIOS" name="pickers[ios]" /> // Yes, we support form serialization, like the web
        </Form>
    );
}