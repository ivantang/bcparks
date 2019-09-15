
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { LoginTextInput } from "../components/LoginTextInput";



export default function LoginScreen() {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <LoginTextInput placeholder="Username / Email" />
      <LoginTextInput placeholder="Password" />
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
