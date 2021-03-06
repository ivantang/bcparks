import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ActionButton(props) {
  const { navigateTo } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(navigateTo, props);
      }}
      style={[styles.button, { backgroundColor: props.color, },]}
    >
      <Image source={props.imageSource} style={props.imageSource && styles.image} />
      <Text style={[styles.buttonText, { color: props.textColor }]}>{props.action}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 35,
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'roboto-bold',
    textAlign: 'center',
    fontSize: 20,
  },
  image: {
    marginBottom: 15,
  },
});
