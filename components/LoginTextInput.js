import React from 'react';
import {  TextInput, StyleSheet } from 'react-native';

export function LoginTextInput(props) {
    const { placeholder, onChangeText } = props
    return (
      <TextInput style = {styles.style}
        underlineColorAndroid = "transparent"
        placeholder = {placeholder}
        placeholderTextColor = "#C6C6C6"
        autoCapitalize = "none"
        onChangeText = {onChangeText}
      />
    );
}

const styles = StyleSheet.create({
  style: {
    borderWidth: 1,
    borderColor: '#E8E8E8', 
    borderRadius: 4,
    height: 56, 
    paddingLeft: 26,
  }
});
