import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import { SQLite } from "expo-sqlite";

const db = SQLite.openDatabase("db.db");
// create users table
db.transaction(tx => {tx.executeSql(
    "create table if not exists users (id integer primary key not null, firstName text, lastName text, points int, userName text, email text, password text);"
)})
// create issues table
db.transaction(tx => {tx.executeSql(
    "create table if not exists issues (id integer primary key not null, name text, issueDesc text, peopleNeeded int, dollarsNeeded int, dollarsDonated int, state int, reward int);"
)})
// create parks table
db.transaction(tx => {tx.executeSql(
    "create table if not exists parks (id integer primary key not null, name text, location text);"
)})
// create parks x issues table
db.transaction(tx => {tx.executeSql(
    "create table if not exists parkIssues (placeholder text);"
)})
// create parks x issues table
db.transaction(tx => {tx.executeSql(
    "create table if not exists userIssues (placeholder text);"
)})

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }

  db.tr
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
