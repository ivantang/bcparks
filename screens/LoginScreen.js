
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {BWTextInput} from "../components/BWTextInput";



export default function LoginScreen() {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <BWTextInput placeholder="Username / Email" />
      <BWTextInput placeholder="Password" />
    </View>
  );
}



LoginScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
});
