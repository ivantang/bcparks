import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView, Text, ImageBackground
} from 'react-native';

import { LoginTextInput } from "../components/LoginTextInput";
import { LoginButton } from "../components/LoginButton";
import Icon from "react-native-vector-icons/FontAwesome";
import bgImage from '../assets/images/loginbg.png';

export default function LoginScreen(props) {
  return (
      <ImageBackground source={bgImage} style={{width: '100%', height: '110%'}}>
      <View style={{marginHorizontal: 30}}>
              <View style={{margin:115}}></View>
          <LoginTextInput placeholder="Username / Email" />
            <View style={{margin:4}}></View>
          <LoginTextInput placeholder="Password" />
            <View style={{margin:4}}></View>
            <Icon.Button
                style={{padding: 20}}
                backgroundColor={'#66B13A'}
                onPress={() => props.navigation.navigate('LandingScreen')}>
                <Text
                    style={{fontSize: 20, color: 'white'}}
                    iconStyle={{align: 'center'}}
                >Sign In</Text>
            </Icon.Button>
            <View style={{margin:4}}></View>
            <Icon.Button
                style={{padding: 20}}
                name='google'
                backgroundColor={'#EC402C'}

                onPress={() => props.navigation.navigate('LandingScreen')}>
                <Text
                    style={{fontSize: 20, color: 'white'}}
                    iconStyle={{align: 'center'}}
                >Sign In With Google</Text>
            </Icon.Button>
            <View style={{margin:4}}></View>
            <Icon.Button
                style={{padding: 20}}
                name='facebook'
                backgroundColor={'#0037C1'}
                onPress={() => props.navigation.navigate('LandingScreen')}>
                <Text
                    style={{fontSize: 20, color: 'white'}}
                    iconStyle={{align: 'center'}}
                >Sign In With Facebook</Text>
            </Icon.Button>
            <View style={{margin:12}}></View>
          <LoginButton text="Sign Up" backgroundColor="#3EC1F0" />
        </View>
      </ImageBackground>
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
