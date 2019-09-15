import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function ActionButton(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(props.navigation.getParam('navigateTo', 'LoginScreen'), props);
      }}
      style={[styles.button, { backgroundColor: props.color, },]}
    >
      <Text style={[styles.buttonText, { color: props.textColor }]}>{props.action}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 35,
    marginVertical: 20,
  },
  buttonText: {
    fontFamily: 'roboto-bold',
    textAlign: 'center',
    fontSize: 20,
  },
});
