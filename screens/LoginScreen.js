
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { LoginTextInput } from "../components/LoginTextInput";
import { LoginButton } from "../components/LoginButton";



export default function LoginScreen() {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <LoginTextInput placeholder="Username / Email" />
      <LoginTextInput placeholder="Password" />
      <LoginButton text="Sign In" backgroundColor="#66B13A" />
      <LoginButton icon="google-plus" text="Sign In With Google" backgroundColor="#EC402C" />
      <LoginButton icon="facebook-f" text="Sign In With Facebook" backgroundColor="#0037C1" />
      <LoginButton text="Sign Up" backgroundColor="#3EC1F0" />
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