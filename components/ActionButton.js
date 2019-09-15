import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function ActionButton(props) {
  return (
    <TouchableOpacity onPress={() => {
      props.navigation.navigate('VolunteerDetails', props);
    }} style={[styles.button, {backgroundColor: props.color}]}>
      <View style={{flexDirection: 'column'}}>
        <View style={styles.points}>
        </View>
        <View style={styles.textView}>
          <Text style={styles.buttonText}>{props.action}</Text>
        </View>
        <View style={styles.spacer}></View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 35,
    marginHorizontal: 35,
  },
  buttonText: {
    fontFamily: 'roboto-bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  points: {
    flex: 1,
  },
  textView: {
    flex: 1,
  },
  spacer: {
    flex: 1,
  },
});
